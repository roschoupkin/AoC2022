import { parse } from './utils/parse';
import { Context } from './utils/Context';

function solution(parsed: ReturnType<typeof parse>) {
  let response_one = 1;

  for (const id of [1, 2, 3]) {
    const blueprint = parsed.get(id);
    if (blueprint !== undefined) {
      response_one *= new Context(blueprint, 32).largest;
    }
  }

  return response_one;
}

export const two = (paths: string) => solution(parse(paths));
