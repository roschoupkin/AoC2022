export interface Coords {
  x: number;
  y: number;
}

export interface RockImplementation<TShape extends number[][]> extends Coords {
  shape: TShape;
}
