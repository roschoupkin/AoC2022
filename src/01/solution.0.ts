import { Puzzle } from '../helpers/Puzzle';
import { total } from './total';

export function one(paths: string) {
  const { puzzle } = new Puzzle(paths).parts('\n\n').convert(total);
  return puzzle.reduce((largest, amount) => (amount > largest ? amount : largest), 0);
}
