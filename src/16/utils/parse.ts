import { splitPuzzle } from '../../utils/puzzle';
import { PUZZLE_LINE_REGEX } from './consts';

export function parse(paths: string) {
  const ratedSet = new Set<string>();

  const ratesMap = new Map<string, number>();
  const movesMap = new Map<string, Set<string>>();

  const puzzle = splitPuzzle(paths, '\n');

  for (const line of puzzle) {
    const [, key, rateStr, list] = line.match(PUZZLE_LINE_REGEX) ?? [];
    const rate = Number(rateStr);

    if (key === undefined || list === undefined || Number.isNaN(rate)) {
      throw new Error('Wrong input');
    }

    ratesMap.set(key, rate);
    movesMap.set(key, new Set(list.split(', ')));

    if (rate > 0) {
      ratedSet.add(key);
    }
  }

  return {
    ratedSet,
    movesMap,
    ratesMap,
  };
}
