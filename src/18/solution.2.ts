import { parse } from './utils/parse';
import { Position } from './utils/types';
import { Context } from './utils/Context';
import { createKey } from './utils/utils';

function solution([cubes, cubesSet]: ReturnType<typeof parse>) {
  const { sides, calcAffected } = new Context(cubesSet);

  const min = Math.min(...cubes.flat());
  const max = Math.max(...cubes.flat());

  const settled = new Set<string>();
  const queue: Position[] = [[0, 0, 0]];

  let response = 0;

  while (queue.length) {
    const step = queue.shift();

    if (!step) {
      break;
    }

    const [x, y, z] = step;

    const is_settled = settled.has(createKey(x, y, z));
    const is_original = cubesSet.has(createKey(x, y, z));
    const in_area = [x, y, z].some((v) => v < min - 1 || v > max + 1);

    if (is_settled || is_original || in_area) {
      continue;
    }

    settled.add(createKey(x, y, z));

    response += calcAffected(x, y, z);

    for (const [dx, dy, dz] of sides) {
      queue.push([x + dx, y + dy, z + dz]);
    }
  }

  return response;
}

export const two = (paths: string) => solution(parse(paths));
