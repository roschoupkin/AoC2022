import { isPartiallyContain } from './utils/utils';
import { parse } from './utils/parse';

function solution(parsed: ReturnType<typeof parse>) {
  let response = 0;

  for (const [left, right] of parsed) {
    if (isPartiallyContain(left, right) || isPartiallyContain(right, left)) {
      response++;
    }
  }

  return response;
}

export const two = (paths: string) => solution(parse(paths));
