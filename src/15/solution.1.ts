import { parse } from './utils/parse';
import { calcRanges, inRange } from './utils/utils';

function solution(y: number, [points, beacons]: ReturnType<typeof parse>) {
  const ranges = calcRanges(y, points);
  const [firstRange] = ranges;

  if (!firstRange) {
    return null;
  }

  for (const range of ranges) {
    const [min, max] = range;
    if (inRange(min, ...firstRange)) {
      firstRange[1] = Math.max(firstRange[1], max);
    }
  }

  return -1 * (beacons.get(y)?.size ?? 0) + (firstRange[1] - firstRange[0] + 1);
}

export const one = (y: number, paths: string) => solution(y, parse(paths));
