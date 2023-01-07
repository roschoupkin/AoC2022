import { parse } from './utils/parse';
import { run } from './utils/utils';

function solution(parsed: ReturnType<typeof parse>) {
  let response = 0;

  run(parsed, ({ y }, { top, left, right, bottom }) => {
    const row = parsed[y] ?? [];
    if (
      top[0] === 0 ||
      left[0] === 0 ||
      bottom[0] === parsed.length - 1 ||
      right[0] === row.length - 1
    ) {
      response++;
    }
  });

  return response;
}

export const one = (paths: string) => solution(parse(paths));
