import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const writings = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/writings' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
    }),
});

export const collections = {
    writings,
};
