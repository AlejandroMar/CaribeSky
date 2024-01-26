export const headMetaData = (z, image) => {
  return z.object({
    title: z.string(),
    description: z.string(),
    image: image().optional(),
  });
};
