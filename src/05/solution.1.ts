import { normalize, run } from './utils/utils';
import { parse } from './utils/parse';

const convert = (line: string[], size: number) => line.splice(0, size + 1).reverse();

function solution(parsed: ReturnType<typeof parse>) {
  const { matrix, steps } = parsed;
  return normalize(run(steps, matrix, convert));
}

export const one = (paths: string) => solution(parse(paths));
