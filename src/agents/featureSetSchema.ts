import { z } from 'zod';

export const featureStatusSchema = z.enum(['supported', 'partially-supported', 'not-supported']);

export const featureSetSchema = z.object({
  planning: z.object({
    'multi-step-planning': featureStatusSchema,
    'plan-editing': featureStatusSchema,
    'plan-execution': featureStatusSchema,
  }),
  reasoning: z.object({
    'explanation-in-natural-language': featureStatusSchema,
    'step-by-step-view': featureStatusSchema,
  }),
  tests: z.object({
    'test-generation': featureStatusSchema,
    'integrates-with-ci': featureStatusSchema,
    'editor-plugins-available': featureStatusSchema,
  }),
});

export const agentSchema = z.object({
  id: z.string(),
  name: z.string(),
  features: featureSetSchema,
});

export type FeatureStatus = z.infer<typeof featureStatusSchema>;
export type FeatureSet = z.infer<typeof featureSetSchema>;
export type Agent = z.infer<typeof agentSchema>;

export function declareSchema(value: Agent): Agent {
  return agentSchema.parse(value);
}

