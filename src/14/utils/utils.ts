import { RockCoords, RockStepFunc } from './types';

export const convertToKey = ({ x, y }: RockCoords) => [x, y].join('x');

export const ALLOWED_STEPS: RockStepFunc[] = [
  ({ x, y }) => ({ x, y: y + 1 }),
  ({ x, y }) => ({ x: x - 1, y: y + 1 }),
  ({ x, y }) => ({ x: x + 1, y: y + 1 }),
];
