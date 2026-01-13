import z from 'zod';

const TextureType = {
  springobjects: 'Maps\\springobjects',
  Objects_2: 'TileSheets\\Objects_2',
} as const;

export const ObjectsJsonSchema = z.record(
  z.string(),
  z.object({
    Name: z.string(),
    Texture: z
      .enum(TextureType)
      .nullable()
      .transform((v) => v ?? TextureType.springobjects),
    SpriteIndex: z.number(),
  })
);
