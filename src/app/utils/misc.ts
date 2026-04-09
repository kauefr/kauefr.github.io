export function as_<T>(x: unknown): T {
  return x as T;
}

export function instanceOfEnum<T extends Readonly<Record<string, string>>>(
  haystack: T,
  needle: unknown,
): needle is T[keyof T] {

  return typeof needle === 'string' && Object.values(haystack).includes(needle);
}
