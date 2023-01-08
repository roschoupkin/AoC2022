import { splitPuzzle } from '../../utils/puzzle';

export function parse(paths: string) {
  return splitPuzzle(paths, '\n').map((line) => line.split(''));
}
