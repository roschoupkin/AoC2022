import { normalize, run } from './utils/utils';
import { parse } from './utils/parse';

const convert = (line: string[], size: number) => line.splice(0, size + 1);

export function two(paths: string) {
  const { matrix, steps } = parse(paths);
  return normalize(run(steps, matrix, convert));
}
