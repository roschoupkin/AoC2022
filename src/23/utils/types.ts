export type Directions = 'N' | 'E' | 'W' | 'S' | 'NE' | 'NW' | 'SE' | 'SW';
export type MainDirections = Extract<Directions, 'N' | 'S' | 'W' | 'E'>;
export type Position = [x: number, y: number];
