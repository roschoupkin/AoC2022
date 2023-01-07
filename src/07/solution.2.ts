import { parse } from './utils/parse';

function solution(parsed: ReturnType<typeof parse>) {
  let response = Infinity;
  const root = parsed['/'] ?? 0;

  for (const size of Object.values(parsed)) {
    if (size >= 30000000 - (70000000 - root)) {
      response = Math.min(response, size);
    }
  }

  return response;
}

export const two = (paths: string) => solution(parse(paths));
