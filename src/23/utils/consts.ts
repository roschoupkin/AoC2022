import { Directions, MainDirections, Position } from './types';

export const DIRECTIONS_DICT: Record<Directions, Position> = {
  N: [0, -1],
  E: [1, 0],
  W: [-1, 0],
  S: [0, 1],

  NE: [1, -1],
  NW: [-1, -1],
  SE: [1, 1],
  SW: [-1, 1],
};

export const DIRECTIONS_TO_CHECK_DICT: Record<MainDirections, Directions[]> = {
  N: ['N', 'NE', 'NW'],
  S: ['S', 'SE', 'SW'],
  W: ['W', 'NW', 'SW'],
  E: ['E', 'NE', 'SE'],
};
