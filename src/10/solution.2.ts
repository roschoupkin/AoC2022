import { parse } from './utils/parse';
import { answer } from './utils/answer';

function solution(parsed: ReturnType<typeof parse>) {
  const { crtMatrix } = answer(parsed);
  return '\n' + crtMatrix.map((r) => r.join('')).join('\n');
}

export const two = (paths: string) => solution(parse(paths));
