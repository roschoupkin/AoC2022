import { parse } from './utils/parse';
import { Direction } from './utils/Direction';

function solution({ pivot, routes, matrix, xRanges, yRanges }: ReturnType<typeof parse>) {
  const state = {
    pivot: { ...pivot },
    direction: new Direction(0),
  };

  while (routes.length) {
    const route = routes.pop();
    if (route === undefined) {
      continue;
    }

    const { direction, pivot } = state;
    const facing = direction.next(route).value;

    if (typeof route === 'number') {
      for (let i = 0; i < route; i++) {
        const candidate = {
          x: pivot.x + facing.x,
          y: pivot.y + facing.y,
        };

        let dot = matrix.get(candidate.x, candidate.y);

        if (dot === null) {
          if (direction.isHorizontal) {
            const [min, max] = xRanges.get(candidate.y) ?? [];
            if (min !== undefined && max !== undefined) {
              candidate.x = facing.x > 0 ? min : max;
            }
          } else {
            const [min, max] = yRanges.get(candidate.x) ?? [];
            if (min !== undefined && max !== undefined) {
              candidate.y = facing.y > 0 ? min : max;
            }
          }

          dot = matrix.get(candidate.x, candidate.y);
        }

        if (dot === '.') {
          pivot.x = candidate.x;
          pivot.y = candidate.y;
        } else if (dot === '#') {
          break;
        }
      }
    }
  }

  const {
    direction,
    pivot: { x, y },
  } = state;

  return 1000 * y + 4 * x + direction.index;
}

export const one = (paths: string) => solution(parse(paths));
