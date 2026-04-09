export type SeasonName = 'spring' | 'summer' | 'fall' | 'winter';

export interface FishData {
  fish: Record<
    string,
    Record<'Name' | 'Texture' | 'SpriteIndex' | 'time', unknown>
  >;
  locations: Record<string, { Name: string }>;
  availability: Record<'fishId' | 'locationId' | 'season', string>[];
}

export const TextureType = {
  Maps_springobjects: 'Maps\\springobjects',
  TileSheets_Objects_2: 'TileSheets\\Objects_2',
} as const;
export type TextureType = (typeof TextureType)[keyof typeof TextureType];

export const SpritesheetData = {
  [TextureType.Maps_springobjects]: {
    url: '/images/springobjects.png',
    width: 384,
    height: 624,
    spriteSize: 16,
  },
  [TextureType.TileSheets_Objects_2]: {
    url: '/images/Objects_2.png',
    width: 128,
    height: 320,
    spriteSize: 16,
  },
} as const;
