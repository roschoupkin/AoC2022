export class Matrix<T> {
  private readonly _matrix = new Map<number, Map<number, T>>();

  public readonly get = (x: number, y: number): T | null => {
    return this._matrix.get(y)?.get(x) ?? null;
  };

  public readonly set = (x: number, y: number, value: T) => {
    const line: Map<number, T> = this._matrix.get(y) ?? new Map();
    this._matrix.set(y, line.set(x, value));
  };
}
