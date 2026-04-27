import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Content Collections = typed local content (Markdown/MDX) with schema validation.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
