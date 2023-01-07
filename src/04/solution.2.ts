import { Puzzle } from '../utils/Puzzle';
import { convertToRanges, convertToRangesLines, isPartiallyContain } from './utils/utils';

export function two(paths: string) {
  let response = 0;

  const { puzzle } = new Puzzle(paths)
    .parts('\n')
    .convert(convertToRangesLines)
    .convert(convertToRanges);

  for (const [left, right] of puzzle) {
    if (isPartiallyContain(left, right) || isPartiallyContain(right, left)) {
      response++;
    }
  }

  return response;
}
