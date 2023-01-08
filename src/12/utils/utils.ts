export const createPoint = (row: number, column: number) => ({
  row,
  column,
  key: [row, column].join('x'),
});

export function charWeight(m: string[][], row: number, column: number) {
  const char = m[row]?.[column];
  if (char === undefined) {
    return -1;
  }

  switch (char) {
    case 'S':
      return 'a'.charCodeAt(0);
    case 'E':
      return 'z'.charCodeAt(0);
    default:
      return char.charCodeAt(0);
  }
}

export function findPoints(m: string[][], ...chars: string[]) {
  const points = [];
  for (let row = 0; row < m.length; row++) {
    for (let column = 0; column < (m[row] ?? []).length; column++) {
      const char = m[row]?.[column];
      if (char !== undefined && chars.includes(char)) {
        points.push(createPoint(row, column));
      }
    }
  }
  return points;
}
