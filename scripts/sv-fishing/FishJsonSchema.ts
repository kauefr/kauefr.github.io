import z from 'zod';

const EntryArrayLength = {
  CrabPotFish: 8,
  FishingRodFish: 14,
} as const;

const CrabPotFishLocationType = {
  ocean: 'ocean',
  freshwater: 'freshwater',
} as const;

const FishingRodFishWeatherType = {
  both: 'both',
  rainy: 'rainy',
  sunny: 'sunny',
} as const;

const CrabPotFishSchema = z
  .array(z.string())
  .length(EntryArrayLength.CrabPotFish)
  .transform((arr) => {
    const name = arr[0];
    const location = arr[4];
    return { name, location };
  })
  .pipe(
    z.object({
      name: z.string(),
      location: z.enum(CrabPotFishLocationType),
    }),
  );

const FishingRodFishSchema = z
  .array(z.string())
  .length(EntryArrayLength.FishingRodFish)
  .transform((arr) => {
    const name = arr[0];
    const spawnTimes = arr[5].split(/\s+/).map(Number);
    const weather = arr[7];

    return { name, spawnTimes, weather };
  })
  .refine((obj) => obj.spawnTimes.length % 2 === 0)
  .transform((obj) => {
    const spawnTimes = [];
    for (let i = 0; i < obj.spawnTimes.length - 1; i += 2) {
      spawnTimes.push({
        minTime: obj.spawnTimes[i],
        maxTime: obj.spawnTimes[i + 1],
      });
    }

    return { ...obj, spawnTimes };
  })
  .pipe(
    z.object({
      name: z.string(),
      spawnTimes: z.array(
        z.object({
          minTime: z.number(),
          maxTime: z.number(),
        }),
      ),
      weather: z.enum(FishingRodFishWeatherType),
    }),
  );

export const FishJsonSchema = z.record(
  z.string(),
  z
    .string()
    .transform((x) => x.split('/'))
    .pipe(z.xor([CrabPotFishSchema, FishingRodFishSchema])),
);
