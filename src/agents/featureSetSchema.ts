import { z } from 'zod';

export enum FeatureStatus {
  Supported = 'supported',
  PartiallySupported = 'partially-supported',
  NotSupported = 'not-supported',
}
type FeatureMeta = {
  name: string;
  mainColor: string;
  secondaryColor: string;
  slug?: string;
}

type SubfeatureMeta = {
  name: string;
}

export const featuresRegistry = z.registry<FeatureMeta>();
export const subfeaturesRegistry = z.registry<SubfeatureMeta>();

function subfeature(name: string) {
  const subfeatureSchema = z.enum(FeatureStatus);
  subfeaturesRegistry.add(subfeatureSchema, {name});
  return subfeatureSchema;
}

function feature<T extends Record<string, z.ZodType>>(meta: FeatureMeta, subfeatures: T) {
  const featureSchema = z.object(subfeatures);
  featuresRegistry.add(featureSchema, meta);
  return featureSchema;
}

export const featureSetSchema = z.object({
  planMode: feature({
    name: 'Plan Mode',
    mainColor: '#3b82f6',
    secondaryColor: '#60a5fa',
    slug: 'planmode',
  }, {
    'dual-model': subfeature('dual-model'),
  }),
  documentation: feature({
    name: 'Documentation',
    mainColor: '#8b5cf6',
    secondaryColor: '#a78bfa',
    slug: 'documentation',
  }, {
    'filesystem': subfeature('filesystem-documentation'),
    'tree': subfeature('hierarchical-tree'),
    'multi-file': subfeature('multi-file'),
    'llms-txt': subfeature('llms-txt'),
    'auto-merge': subfeature('auto-merge'),
    'partial': subfeature('partial'),
  }),
  tools: feature({
    name: 'Tools',
    mainColor: '#06b6d4',
    secondaryColor: '#22d3ee',
    slug: 'tools',
  }, {
    'search-engine': subfeature('search-engine'),
    'fetch-data': subfeature('fetch-data'),
  }),
});

type AgentMeta = {
  id: string;
  name: string;
}
export const agentRegistry = z.registry<AgentMeta>()
export function declareSchema<T extends z.infer<typeof featureSetSchema>>(meta: AgentMeta, features: T) {
  return {
    meta,
    features: featureSetSchema.parse(features),
  }
}

export type Agent = ReturnType<typeof declareSchema>;

