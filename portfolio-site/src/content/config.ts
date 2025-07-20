import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string().optional(),
    }),
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date().optional(),
    }),
});

export const collections = {
    blog,
    projects,
};
