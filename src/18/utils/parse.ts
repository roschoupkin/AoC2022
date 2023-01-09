import { splitPuzzle } from '../../utils/puzzle';
import { createKey } from './utils';
import { Position } from './types';

const isPosition = (candidate: number[]): candidate is Position => candidate.length === 3;

function convertToPosition(line: string): Position {
  const position = line.split(',').map(Number);
  if (isPosition(position)) {
    return position;
  }
  throw new Error('Wrong input');
}

export function parse(paths: string) {
  const cubes: Array<[x: number, y: number, z: number]> = [];
  const cubesSet = new Set<string>();

  const puzzle = splitPuzzle(paths, '\n');

  for (const line of puzzle) {
    const position = convertToPosition(line);
    cubes.push(position);
    cubesSet.add(createKey(...position));
  }

  return [cubes, cubesSet] as const;
}
