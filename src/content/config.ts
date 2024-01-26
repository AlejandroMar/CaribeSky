// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { headMetaData } from "../contentSchemas/commonSchemas/headMetaData";

// 2. Define a `type` and `schema` for each collection
const frontPage = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      headMetaData: headMetaData(z, image),
      title: z.string(),
      subtitle: z.string(),
      paragraph: z.string().optional(),
    }),
});

const about = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      headMetaData: headMetaData(z, image),
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
