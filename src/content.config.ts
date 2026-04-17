import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
	loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		ticker: z.string().min(1),
		summary: z.string().min(1),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { research };
