import * as fs from 'fs';
import { ArrayType } from './ArrayType';

class PuzzleParts<T extends unknown[]> {
  public get puzzle() {
    return this.value;
  }

  constructor(private readonly value: T) {}

  public readonly convert = <U>(fn: (v: ArrayType<T>) => U) => {
    return new PuzzleParts(this.value.map((v) => fn(v as ArrayType<T>)));
  };
}

export class Puzzle {
  public readonly value: string;

  constructor(paths: string) {
    this.value = fs.readFileSync(paths, { encoding: 'utf8', flag: 'r' }).trimEnd();
  }

  public readonly parts = (separator: string) => new PuzzleParts(this.value.split(separator));
}
