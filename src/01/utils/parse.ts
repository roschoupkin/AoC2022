import { splitPuzzle } from '../../utils/puzzle';

function convert(line: string) {
  return line.split('\n').reduce((total, value) => {
    const num = Number(value);
    if (Number.isFinite(num)) {
      total += num;
    }
    return total;
  }, 0);
}

export function parse(paths: string) {
  return splitPuzzle(paths, '\n\n').map(convert);
}
