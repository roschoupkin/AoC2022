import { parse } from './utils/parse';

function solution(parsed: ReturnType<typeof parse>) {
  return parsed.reduce((largest, amount) => (amount > largest ? amount : largest), 0);
}

export const one = (paths: string) => solution(parse(paths));
