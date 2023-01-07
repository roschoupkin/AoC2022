import { MOVE_AREA, MOVES_SET } from './consts';
import { Coords, MoveKeys } from './types';

export const hasIntersection = (head: Coords, tail: Coords) =>
  MOVE_AREA.some(({ x, y }) => head.x + x === tail.x && head.y + y === tail.y);

export const isMoveKey = (direction?: string): direction is MoveKeys =>
  direction !== undefined && MOVES_SET.has(direction);
