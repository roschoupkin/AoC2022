import { parse } from './utils/parse';
import { calcRanges, inRange } from './utils/utils';

function solution(max: number, [points]: ReturnType<typeof parse>) {
  for (let y = 0; y <= max; y++) {
    const [range, ...ranges] = calcRanges(y, points);

    if (!range) {
      break;
    }

    for (const next of ranges) {
      const [min, max] = next;
      if (inRange(min, ...range)) {
        range[1] = Math.max(range[1], max);
      } else if (inRange(max, ...range)) {
        range[0] = Math.max(range[0], min);
      } else {
        return (range[1] + 1) * 4000000 + y;
      }
    }
  }

  return null;
}

export const two = (max: number, paths: string) => solution(max, parse(paths));
