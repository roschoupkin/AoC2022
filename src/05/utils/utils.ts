export function run(
  steps: string[],
  matrix: string[][],
  convert: (line: string[], size: number) => string[]
) {
  const clone = [...matrix];

  for (const step of steps) {
    const match = step.match(/move (\d+) from (\d+) to (\d+)/) ?? [];
    const [, size, from, to] = match.map((v) => (/\d+/.test(v) ? Number(v) - 1 : null));

    if (size == null || from == null || to == null) {
      continue;
    }

    clone[to]?.unshift(...convert(matrix[from] ?? [], size));
  }

  return clone;
}

export function normalize(matrix: string[][]) {
  const normalized: string[] = [];

  for (const [first] of matrix) {
    if (first !== undefined) {
      normalized.push(first);
    }
  }

  return normalized.join('').replace(/([[|\]])/g, '');
}
