import z from 'zod';

const EntryArrayLength = {
  TrapFish: 8,
  PoleFish: 14,
} as const;

const TrapFish = z.object({
  name: z.string(),
  type: z.literal('trap'),
  location: z.enum(['freshwater', 'ocean']),
});

const PoleFish = z.object({
  name: z.string(),
  type: z.literal('pole'),
  spawnTimes: z.array(
    z.object({
      minTime: z.number(),
      maxTime: z.number(),
    })
  ),
  weather: z.enum(['sunny', 'rainy', 'both']),
});
type SpawnTimes = z.infer<typeof PoleFish.shape.spawnTimes>;

function transformSpawnTimes(
  x: { spawnTimes: string[] },
  ctx: z.core.$RefinementCtx
) {
  let spawnTimesArray: SpawnTimes;
  if (x.spawnTimes.length === 2) {
    spawnTimesArray = [
      { minTime: +x.spawnTimes[0], maxTime: +x.spawnTimes[1] },
    ];
  } else if (x.spawnTimes.length === 4) {
    spawnTimesArray = [
      { minTime: +x.spawnTimes[0], maxTime: +x.spawnTimes[1] },
      { minTime: +x.spawnTimes[2], maxTime: +x.spawnTimes[3] },
    ];
  } else {
    ctx.issues.push({
      code: 'custom',
      input: x.spawnTimes,
      path: ['spawnTimes'],
      message: `Invalid spawnTimes "${x.spawnTimes}". Expected pairs like "600 900 1200 1600".`,
    });
    return z.NEVER;
  }
  return { ...x, spawnTimes: spawnTimesArray };
}

export const FishJsonSchema = z.record(
  z.string(),
  z
    .string()
    .transform((x) => x.split('/'))
    .pipe(
      z.union([
        z
          .array(z.string())
          .length(EntryArrayLength.TrapFish)
          .transform(([name, type, , , location, , ,]) => ({
            name,
            type,
            location,
          }))
          .pipe(TrapFish),
        z
          .array(z.string())
          .length(EntryArrayLength.PoleFish)
          .transform(([name, , , , , spawnTimes, , weather]) => ({
            name,
            type: 'pole' as const,
            spawnTimes: spawnTimes.split(/\s+/),
            weather,
          }))
          .transform(transformSpawnTimes)
          .pipe(PoleFish),
      ])
    )
);
