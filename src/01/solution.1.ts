import { Puzzle } from '../helpers/Puzzle';
import { convertToTotal } from './utils';

export function two(paths: string) {
  const { puzzle } = new Puzzle(paths).parts('\n\n').convert(convertToTotal);
  return puzzle
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((s, v) => s + v, 0);
}
