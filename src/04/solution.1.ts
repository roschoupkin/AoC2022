import { isFullyContain } from './utils/utils';
import { parse } from './utils/parse';

function solution(parsed: ReturnType<typeof parse>) {
  let response = 0;

  for (const [left, right] of parsed) {
    if (isFullyContain(left, right) || isFullyContain(right, left)) {
      response++;
    }
  }

  return response;
}

export const one = (paths: string) => solution(parse(paths));
