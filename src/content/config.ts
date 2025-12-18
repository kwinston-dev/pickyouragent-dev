import { defineCollection, z } from 'astro:content';

const featuresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categoryKey: z.string(),
  }),
});

const subfeaturesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    featureName: z.string(),
    subfeatureName: z.string(),
  }),
});

export const collections = {
  features: featuresCollection,
  subfeatures: subfeaturesCollection,
};

