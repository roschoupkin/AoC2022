import { INITIAL, MOVE_AREA, MOVES_SET, X_MOVE, Y_MOVE } from './consts';
import { Coords, MoveKeys } from './types';

const hasIntersection = (head: Coords, tail: Coords) =>
  MOVE_AREA.some(({ x, y }) => head.x + x === tail.x && head.y + y === tail.y);

const isMoveKey = (direction?: string): direction is MoveKeys =>
  direction !== undefined && MOVES_SET.has(direction);

export function run(commands: string[], size: number) {
  const history: Coords[][] = [new Array(size).fill(INITIAL)];

  for (const command of commands) {
    const [, direction, count] = command.match(/([RLUD])\s(\d+)/) ?? [];
    const steps = Number(count);

    if (!isMoveKey(direction) || Number.isNaN(steps)) {
      continue;
    }

    for (let i = 0; i < steps; i++) {
      const previous = history[history.length - 1] ?? [];
      const [last] = previous;

      if (!previous.length || !last) {
        continue;
      }

      const knots = [{ x: last.x + X_MOVE[direction], y: last.y + Y_MOVE[direction] }];

      for (let j = 1; j < previous.length; j++) {
        const tail = previous[j];
        const head = knots[j - 1];

        if (tail === undefined || head === undefined) {
          continue;
        }

        if (hasIntersection(head, tail)) {
          knots.push(tail);
        } else {
          if (head.x === tail.x || head.y === tail.y) {
            if (head.x !== tail.x) {
              knots.push({ x: tail.x + (head.x > tail.x ? 1 : -1), y: tail.y });
            } else {
              knots.push({ x: tail.x, y: tail.y + (head.y > tail.y ? 1 : -1) });
            }
          } else {
            knots.push({
              x: tail.x + (head.x > tail.x ? 1 : -1),
              y: tail.y + (head.y > tail.y ? 1 : -1),
            });
          }
        }
      }

      history.push(knots);
    }
  }

  const response = new Set();

  for (const shift of history) {
    const tail = shift[shift.length - 1];
    if (tail !== undefined) {
      response.add([tail.x, tail.y].join('.'));
    } else {
      throw new Error('WTF?');
    }
  }

  return response.size;
}
