import { isFullyContain } from './utils/utils';
import { parse } from './utils/parse';

export function one(paths: string) {
  let response = 0;

  const puzzle = parse(paths);

  for (const [left, right] of puzzle) {
    if (isFullyContain(left, right) || isFullyContain(right, left)) {
      response++;
    }
  }

  return response;
}
