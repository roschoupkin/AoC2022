import { Puzzle } from '../utils/Puzzle';
import { convertToRanges, convertToRangesLines, isFullyContain } from './utils/utils';

export function one(paths: string) {
  let response = 0;

  const { puzzle } = new Puzzle(paths)
    .parts('\n')
    .convert(convertToRangesLines)
    .convert(convertToRanges);

  for (const [left, right] of puzzle) {
    if (isFullyContain(left, right) || isFullyContain(right, left)) {
      response++;
    }
  }

  return response;
}
