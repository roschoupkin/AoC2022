import { parse } from './utils/parse';
import { answer } from './utils/answer';

function solution(parsed: ReturnType<typeof parse>) {
  return answer(parsed, 10);
}

export const two = (paths: string) => solution(parse(paths));
