import { parse } from './utils/parse';
import { run } from './utils/utils';

function solution(parsed: ReturnType<typeof parse>) {
  return run(parsed, 2);
}

export const one = (paths: string) => solution(parse(paths));
