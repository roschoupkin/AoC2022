import { normalize } from './utils';

export function answer(
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

  return normalize(clone);
}
