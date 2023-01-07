import { splitPuzzle } from '../../utils/puzzle';

const isRangesLines = (candidate: string[]): candidate is [string, string] =>
  candidate.length === 2 && candidate.every(Boolean);

const isRanges = (candidate: number[][]): candidate is [[number, number], [number, number]] =>
  candidate.length === 2 && candidate.every((range) => range.length === 2);

const convert = (line: string): [[number, number], [number, number]] => {
  const splitted = line.split(',');
  if (isRangesLines(splitted)) {
    const converted = splitted.map((range) => range.split('-').map(Number));
    if (isRanges(converted)) {
      return converted;
    }
  }
  throw new Error('Wrong input');
};

export function parse(paths: string) {
  return splitPuzzle(paths, '\n').map(convert);
}
