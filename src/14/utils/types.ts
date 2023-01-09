export interface RockCoords {
  x: number;
  y: number;
}

export type RockStepFunc = (coords: RockCoords) => RockCoords;
