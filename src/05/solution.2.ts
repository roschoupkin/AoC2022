import { normalize } from './utils/utils';
import { ParsePuzzle } from './utils/parse';

export function two(paths: string) {
  const parsed = new ParsePuzzle(paths).parse();
  const { matrix } = parsed.run((line, size) => line.splice(0, size + 1));

  return normalize(matrix);
}
