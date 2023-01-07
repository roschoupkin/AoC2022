import { Coords, MoveKeys, Moves } from './types';
import { UnionsToTuple } from 'ts-type-helpers';

export const MOVE_AREA = ((radius) => {
  const list: Coords[] = [];
  for (let x = -radius; x <= radius; x++) {
    for (let y = -radius; y <= radius; y++) {
      list.push({ x, y });
    }
  }
  return list;
})(1);

export const INITIAL: Coords = { x: 0, y: 0 };

export const Y_MOVE: Moves = { L: 0, R: 0, U: 1, D: -1 };
export const X_MOVE: Moves = { L: -1, R: 1, U: 0, D: 0 };

export const MOVES_LIST: UnionsToTuple<MoveKeys> = ['L', 'R', 'U', 'D'];
export const MOVES_SET = new Set<string>(MOVES_LIST);
