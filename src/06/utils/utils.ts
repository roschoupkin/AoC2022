class SearchContext {
  private _start: number;
  private _end: number;

  public get start() {
    return this._start;
  }

  public get end() {
    return this._end;
  }

  constructor(range: number) {
    this._start = 0;
    this._end = range;
  }

  public readonly increase = () => {
    this._start++;
    this._end++;
  };
}

const removeDuplicates = (s: string) => [...new Set(s.split(''))].join('');

export function searchStartOfPacket(puzzle: string, range: number) {
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
