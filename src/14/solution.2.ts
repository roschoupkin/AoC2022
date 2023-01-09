import { parse } from './utils/parse';
import { ALLOWED_STEPS, convertToKey } from './utils/utils';
import { RockCoords } from './utils/types';

const LOOP_CONDITION = { current: true };
const START: RockCoords = { x: 500, y: 0 };

function solution(parsed: ReturnType<typeof parse>) {
  const grainsSet = new Set();
  const rocksSet = new Set(parsed.map(convertToKey));

  const max_y = Math.max(...parsed.map(({ y }) => y)) + 2;

  for (let x = START.x - max_y; x <= START.x + max_y; x++) {
    rocksSet.add(convertToKey({ x, y: max_y }));
  }

  while (LOOP_CONDITION.current) {
    const grain = { ...START };

    grainStuck: while (LOOP_CONDITION.current) {
      for (let i = 0; i < ALLOWED_STEPS.length; i++) {
        const next = ALLOWED_STEPS[i]?.(grain);

        if (!next) {
          continue;
        }

        if (rocksSet.has(convertToKey(next)) || grainsSet.has(convertToKey(next))) {
          if (i === ALLOWED_STEPS.length - 1) {
            grainsSet.add(convertToKey(grain));
            break grainStuck;
          }
        } else {
          grain.x = next.x;
          grain.y = next.y;

          break;
        }
      }
    }

    if (grain.x === START.x && grain.y === START.y) {
      break;
    }
  }

  return grainsSet.size;
}

export const two = (paths: string) => solution(parse(paths));
