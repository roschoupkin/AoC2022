export interface Point {
  row: number;
  column: number;
  key: string;
}

export type BfsQueue = Array<[point: Point, length: number]>;
