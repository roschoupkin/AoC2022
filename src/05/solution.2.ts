import { parse } from './utils/parse';
import { answer } from './utils/answer';

const convert = (line: string[], size: number) => line.splice(0, size + 1);

function solution(parsed: ReturnType<typeof parse>) {
  const { matrix, steps } = parsed;
  return answer(steps, matrix, convert);
}

export const two = (paths: string) => solution(parse(paths));
