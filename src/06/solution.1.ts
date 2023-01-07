import { parse } from './utils/parse';
import { answer } from './utils/answer';

function solution(parsed: ReturnType<typeof parse>) {
  return answer(parsed, 4);
}

export const one = (paths: string) => solution(parse(paths));
