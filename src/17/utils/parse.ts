import { splitPuzzle } from '../../utils/puzzle';

export function parse(paths: string) {
  const puzzle = splitPuzzle(paths, '');
  return puzzle.reduce<number[]>((list, s) => {
    switch (s) {
      case '>':
        return list.concat(1);
      case '<':
        return list.concat(-1);
      default:
        return list;
    }
  }, []);
}
