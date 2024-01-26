// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const frontPage = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    paragraph: z.string().optional(),
  }),
});

const about = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    paragraph: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  frontPage,
  about,
};
