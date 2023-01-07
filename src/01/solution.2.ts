import { parse } from './utils/parse';

function solution(parsed: ReturnType<typeof parse>) {
  return parsed
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((s, v) => s + v, 0);
}

export const two = (paths: string) => solution(parse(paths));
