import { defineCollection, reference } from "astro:content";

import { glob, file } from "astro/loaders";

import { z } from "astro/zod";

const post = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "./**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(reference("tags")),
  }),
});

const tags = defineCollection({
  loader: glob({ base: "./src/content/tags", pattern: "*.json" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    related: z.array(reference("tags")),
  }),
});

export const collections = { post, tags };
