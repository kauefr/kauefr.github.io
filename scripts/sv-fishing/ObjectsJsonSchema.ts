import z from 'zod';

export const TextureType = {
  Maps_springobjects: 'Maps\\springobjects',
  TileSheets_Objects_2: 'TileSheets\\Objects_2',
} as const;
export type TextureType = (typeof TextureType)[keyof typeof TextureType];

export const ObjectSchema = z.object({
  Name: z.string(),
  Type: z.string(),
  Category: z.number(),
  Texture: z
    .nullable(z.literal(TextureType.TileSheets_Objects_2))
    .transform((v) => v ?? TextureType.Maps_springobjects),
  SpriteIndex: z.number(),
  ContextTags: z.array(z.string()).nullable(),
});

export const ObjectsJsonSchema = z.record(z.string(), ObjectSchema);
