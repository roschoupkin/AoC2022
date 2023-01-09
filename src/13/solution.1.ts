import { parse } from './utils/parse';
import { isCorrectPackets } from './utils/utils';

function solution(parsed: ReturnType<typeof parse>) {
  let total = 0;
  for (let i = 0; i < parsed.length; i += 2) {
    const left = parsed[i];
    const right = parsed[i + 1];
    if (left !== undefined && right !== undefined) {
      if (isCorrectPackets([left, right])) {
        total += Math.ceil(i / 2) + 1;
      }
    }
  }
  return total;
}

export const one = (paths: string) => solution(parse(paths));
