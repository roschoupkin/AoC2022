export class SearchContext {
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

export const removeDuplicates = (s: string) => [...new Set(s.split(''))].join('');
