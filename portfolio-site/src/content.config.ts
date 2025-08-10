import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			shortDescription: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			techStack: z.array(z.string()).optional(),
			repoUrl: z.string().url().optional(),
			liveUrl: z.string().url().optional(),
			role: z.string().optional(),
			features: z.array(z.string()).optional(),
			year: z.number().optional(),
			featured: z.boolean().optional(),
		}),
});

export const collections = { projects };
