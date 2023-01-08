import { parse } from './utils/parse';
import { findPoints } from './utils/utils';
import { bfs } from './utils/bfs';

function solution(parsed: ReturnType<typeof parse>) {
  const [start] = findPoints(parsed, 'S');
  const [finish] = findPoints(parsed, 'E');

  if (start === undefined || finish === undefined) {
    return -1;
  }
  return bfs(parsed, start, finish);
}

export const one = (paths: string) => solution(parse(paths));
