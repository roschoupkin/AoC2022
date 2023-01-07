import { parse } from './utils/parse';
import { run } from './utils/utils';

function solution(parsed: ReturnType<typeof parse>) {
  let response = 0;

  run(parsed, ({ x, y }, { top, left, right, bottom }) => {
    const possible = (y - top[1]) * (x - left[1]) * (bottom[1] - y) * (right[1] - x);
    if (possible > response) {
      response = possible;
    }
  });

  return response;
}

export const two = (paths: string) => solution(parse(paths));
