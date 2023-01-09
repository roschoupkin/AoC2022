import { WindDirection } from './types';
import { WIND_DIRECTIONS } from './consts';
import { Coords } from './Coords';

export const isBlizzard = (cell?: string): cell is WindDirection =>
  cell !== undefined && cell in WIND_DIRECTIONS;

export const getStateKey = (minutes: number, coords: Pick<Coords, 'key'>) =>
  [minutes, coords.key].join('-');
