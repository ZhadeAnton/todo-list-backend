export function isEqual(a: unknown, b: unknown): boolean {
  if (typeof a !== typeof b) {
    return false;
  }
  return a === b;
}
