import { z, defineCollection } from 'astro:content';

const notesCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),
});

export const collections = {
    'notes': notesCollection,
};
