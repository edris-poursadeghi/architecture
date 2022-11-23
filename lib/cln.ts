export function cls(
  condition: boolean | string | number,
  cl1: string,
  cl2: string
): string {
  if (condition) {
    return cl1;
  } else {
    return cl2;
  }
}
