import { splitPuzzle } from '../../utils/puzzle';
import { calcRadius } from './utils';
import { PUZZLE_LINE_REGEX } from './consts';
import { Coords, Point } from './types';

export function parse(paths: string) {
  const puzzle = splitPuzzle(paths, '\n');

  const points: Point[] = [];
  const beacons = new Map<number, Set<number>>();

  for (const line of puzzle) {
    const match = line.match(PUZZLE_LINE_REGEX) ?? [];

    if (!match.length) {
      continue;
    }

    const [, sx, sy, bx, by] = match.map(Number);

    if (sx !== undefined && sy !== undefined && bx !== undefined && by !== undefined) {
      const sensor: Coords = { x: sx, y: sy };
      const beacon: Coords = { x: bx, y: by };

      const radius = calcRadius(sensor, beacon);

      points.push({ sensor, beacon, radius });
      beacons.set(beacon.y, new Set(beacons.get(beacon.y)).add(beacon.x));
    }
  }

  return [points, beacons] as const;
}
