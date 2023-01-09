export interface Coords {
  x: number;
  y: number;
}

export interface Point {
  sensor: Coords;
  beacon: Coords;
  radius: number;
}
