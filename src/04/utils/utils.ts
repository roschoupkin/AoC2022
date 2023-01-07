export const isFullyContain = (a: [number, number], b: [number, number]) =>
  a[0] >= b[0] && a[1] <= b[1];

export const isPartiallyContain = (a: [number, number], b: [number, number]) =>
  (a[0] >= b[0] && a[0] <= b[1]) || (a[0] <= b[0] && a[0] >= b[1]);

const isRangesLines = (candidate: string[]): candidate is [string, string] =>
  candidate.length === 2 && candidate.every(Boolean);

export const convertToRangesLines = (line: string): [string, string] => {
  const splitted = line.split(',');
  if (isRangesLines(splitted)) {
    return splitted;
  }
  throw new Error('Wrong input');
};

const isRanges = (candidate: number[][]): candidate is [[number, number], [number, number]] =>
  candidate.length === 2 && candidate.every((range) => range.length === 2);

export const convertToRanges = (line: [string, string]): [[number, number], [number, number]] => {
  const converted = line.map((range) => range.split('-').map(Number));
  if (isRanges(converted)) {
    return converted;
  }
  throw new Error('Wrong input');
};
