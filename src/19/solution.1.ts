import { parse } from './utils/parse';
import { Context } from './utils/Context';

function solution(parsed: ReturnType<typeof parse>) {
  let response_zero = 0;

  for (const id of parsed.keys()) {
    const blueprint = parsed.get(id);
    if (blueprint !== undefined) {
      response_zero += id * new Context(blueprint, 24).largest;
    }
  }

  return response_zero;
}

export const one = (paths: string) => solution(parse(paths));
