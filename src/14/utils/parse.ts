import { splitPuzzle } from '../../utils/puzzle';
import { RockCoords } from './types';

const isRock = (candidate: number[]): candidate is [x: number, y: number] => candidate.length === 2;

function extractRock(coordsLine: string): [x: number, y: number] {
  const rock = coordsLine.split(',').map(Number);
  if (isRock(rock)) {
    return rock;
  }
  throw new Error('Wrong input');
}

function extractRocks(line: string): Array<[x: number, y: number]> {
  return line.split(' -> ').map(extractRock);
}

export function parse(paths: string) {
  const rocksList: RockCoords[] = [];

  const puzzle = splitPuzzle(paths, '\n');

  for (const line of puzzle) {
    const rocks = extractRocks(line);

    for (let i = 0; i < rocks.length - 1; i++) {
      const start = rocks[i];
      const end = rocks[i + 1];

      if (start === undefined || end === undefined) {
        continue;
      }

      const [startX, startY] = start;
      const [endX, endY] = end;

      for (let x = Math.min(startX, endX); x <= Math.max(startX, endX); x++) {
        for (let y = Math.min(startY, endY); y <= Math.max(startY, endY); y++) {
          rocksList.push({ x, y });
        }
      }
    }
  }

  return rocksList;
}
