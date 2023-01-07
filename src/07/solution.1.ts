import { parse } from './utils/parse';

function solution(parsed: ReturnType<typeof parse>) {
  return Object.values(parsed).reduce((total, current) => {
    return current <= 100000 ? total + current : total;
  }, 0);
}

export const one = (paths: string) => solution(parse(paths));
