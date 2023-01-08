import { splitPuzzle } from '../../utils/puzzle';
import { Monkey } from './Monkey';
import { MonkeysDict } from './types';

export function parse(paths: string) {
  const monkeys: MonkeysDict = {};
  const puzzle = splitPuzzle(paths, '\n\n');

  for (const input of puzzle) {
    const monkey = new Monkey(input);
    monkeys[monkey.id] = monkey;
  }

  return monkeys;
}
