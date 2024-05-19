// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const portfolioCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    main: z.object({
      id: z.number(),
      content: z.array(z.string()),
      imgCard: image(),
      imgMain: image(),
      imgAlt: z.string(),
    })
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    contents: z.array(z.string()),
    author: z.string(),
    role: z.string().optional(),
    authorImage: image(),
    authorImageAlt: z.string(),
    pubDate: z.date(),
    cardImage: image(),
    cardImageAlt: z.string(),
    readTime: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

const insightsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    // contents: z.array(z.string()),
    cardImage: image(),
    cardImageAlt: z.string(),
  }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  'portfolio': portfolioCollection,
  'blog': blogCollection,
  'insights': insightsCollection,
};