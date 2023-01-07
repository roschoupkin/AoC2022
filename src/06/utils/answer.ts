import { removeDuplicates, SearchContext } from './utils';

export function answer(puzzle: string, range: number) {
  const context = new SearchContext(range);

  while (context.end < puzzle.length) {
    const substr = puzzle.substring(context.start, context.end);
    if (substr.length === removeDuplicates(substr).length) {
      return context.end;
    }
    context.increase();
  }

  return -1;
}
