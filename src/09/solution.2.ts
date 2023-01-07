import { parse } from './utils/parse';
import { run } from './utils/utils';

function solution(parsed: ReturnType<typeof parse>) {
  return run(parsed, 10);
}

export const two = (paths: string) => solution(parse(paths));
