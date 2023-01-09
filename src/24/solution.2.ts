import { parse } from './utils/parse';
import { answer } from './utils/answer';

function solution(parsed: ReturnType<typeof parse>) {
  const toFinish = answer(parsed);
  const toStart = answer(parsed, [parsed.width - 1, parsed.height], [1, 0], toFinish);

  return answer(parsed, [1, 0], [parsed.width - 1, parsed.height], toStart);
}

export const two = (paths: string) => solution(parse(paths));
