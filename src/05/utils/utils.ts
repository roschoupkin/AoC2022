export function normalize(matrix: string[][]) {
  const normalized: string[] = [];

  for (const [first] of matrix) {
    if (first !== undefined) {
      normalized.push(first);
    }
  }

  return normalized.join('').replace(/([[|\]])/g, '');
}
