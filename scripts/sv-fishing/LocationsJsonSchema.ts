import z from 'zod';

const ConditionKind = {
  INVALID_CONDITION: 'INVALID_CONDITION',
  IS_FESTIVAL_DAY: 'IS_FESTIVAL_DAY',
  IS_ISLAND_NORTH_BRIDGE_FIXED: 'IS_ISLAND_NORTH_BRIDGE_FIXED',
  IS_PASSIVE_FESTIVAL_OPEN: 'IS_PASSIVE_FESTIVAL_OPEN',
  LOCATION_SEASON: 'LOCATION_SEASON',
  PLAYER_HAS_ITEM: 'PLAYER_HAS_ITEM',
  PLAYER_HAS_MAIL: 'PLAYER_HAS_MAIL',
  PLAYER_SPECIAL_ORDER_RULE_ACTIVE: 'PLAYER_SPECIAL_ORDER_RULE_ACTIVE',
  RANDOM: 'RANDOM',
  SEASON: 'SEASON',
  TIME: 'TIME',
  WEATHER: 'WEATHER',
  YEAR: 'YEAR',
} as const;

interface Condition {
  negated: boolean;
  type: keyof typeof ConditionKind;
  args: string[];
}
const INVALID_CONDITION = {
  type: ConditionKind.INVALID_CONDITION,
  negated: false,
  args: [],
};
const ValidConditionSchema = z.object({
  negated: z.boolean(),
  type: z.enum(ConditionKind).exclude([ConditionKind.INVALID_CONDITION]),
  args: z.array(z.string()),
});

function conditionFromString(s: string): Condition {
  const regex = /^\s*(!)?\s*([A-Z_]+)(?:\s+(.*))?\s*$/;
  const match = s.match(regex);

  if (!match) return INVALID_CONDITION;

  const [, neg, type, argsRaw] = match;
  return {
    negated: Boolean(neg),
    type: type as keyof typeof ConditionKind,
    args: argsRaw
      ? argsRaw
          .split(/[,\s]+/)
          .map((x) => x.trim())
          .filter(Boolean)
      : [],
  };
}

const Position = z.object({
  x: z.int(),
  y: z.int(),
  width: z.int(),
  height: z.int(),
});

const Fish = z.object({
  Id: z.string(),
  ItemId: z.nullable(z.string()),
  RandomItemId: z.nullable(z.array(z.string())),
  Condition: z.union([
    z.null(),
    z
      .string()
      .transform((x) =>
        x
          .split(',')
          .map((x) => x.trim())
          .filter(Boolean)
      )
      .pipe(z.array(z.preprocess(conditionFromString, ValidConditionSchema))),
  ]),
  Season: z.nullable(z.int().min(0).max(3)),
  FishAreaId: z.nullable(z.string()),
  BobberPosition: z.nullable(Position),
  PlayerPosition: z.nullable(Position),
});
type Fish = z.infer<typeof Fish>;

export const LocationsJsonSchema = z.record(
  z.string(),
  z.object({
    FishAreas: z.looseRecord(z.string(), z.unknown()),
    Fish: z.array(Fish),
  })
);
