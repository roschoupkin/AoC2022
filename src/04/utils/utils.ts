export const isFullyContain = (a: [number, number], b: [number, number]) =>
  a[0] >= b[0] && a[1] <= b[1];

export const isPartiallyContain = (a: [number, number], b: [number, number]) =>
  (a[0] >= b[0] && a[0] <= b[1]) || (a[0] <= b[0] && a[0] >= b[1]);
