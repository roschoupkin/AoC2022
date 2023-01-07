import { parse } from './utils/parse';
import { answer } from './utils/answer';

function solution(parsed: ReturnType<typeof parse>) {
  const { strengths } = answer(parsed);
  return Object.values(strengths).reduce((total, v) => total + v, 0);
}

export const one = (paths: string) => solution(parse(paths));
