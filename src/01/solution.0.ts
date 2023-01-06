import { Puzzle } from '../utils/Puzzle';
import { convertToTotal } from './utils/utils';

export function one(paths: string) {
  const { puzzle } = new Puzzle(paths).parts('\n\n').convert(convertToTotal);
  return puzzle.reduce((largest, amount) => (amount > largest ? amount : largest), 0);
}
