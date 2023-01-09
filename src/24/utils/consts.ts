import { CoordinatesTuple, WindDirection } from './types';

export const WIND_DIRECTIONS: Record<WindDirection, CoordinatesTuple> = {
  'v': [0, 1],
  '<': [-1, 0],
  '>': [1, 0],
  '^': [0, -1],
};
