import { normalize, run } from './utils/utils';
import { parse } from './utils/parse';

const convert = (line: string[], size: number) => line.splice(0, size + 1).reverse();

export function one(paths: string) {
  const { matrix, steps } = parse(paths);
  return normalize(run(steps, matrix, convert));
}
