import { parse } from './utils/parse';
import { findPoints } from './utils/utils';
import { bfs } from './utils/bfs';

function solution(parsed: ReturnType<typeof parse>) {
  const [finish] = findPoints(parsed, 'E');

  if (finish === undefined) {
    return -1;
  }

  let response = Infinity;

  for (const char of findPoints(parsed, 'S', 'a')) {
    const length = bfs(parsed, char, finish);
    if (length > 0) {
      response = Math.min(length, response);
    }
  }

  return response;
}

export const two = (paths: string) => solution(parse(paths));
