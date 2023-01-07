export interface Coords {
  x: number;
  y: number;
}

export interface Moves {
  L: number;
  R: number;
  U: number;
  D: number;
}

export type MoveKeys = keyof Moves;
