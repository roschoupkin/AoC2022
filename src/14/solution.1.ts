import { parse } from './utils/parse';
import { RockCoords } from './utils/types';
import { ALLOWED_STEPS, convertToKey } from './utils/utils';

const LOOP_CONDITION = { current: true };
const START: RockCoords = { x: 500, y: 0 };

function solution(parsed: ReturnType<typeof parse>) {
  const grainsSet = new Set();
  const rocksSet = new Set(parsed.map(convertToKey));

  const maxY = Math.max(...parsed.map(({ y }) => y));

  outOfView: while (LOOP_CONDITION.current) {
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

          if (grain.y >= maxY) {
            break outOfView;
          } else {
            break;
          }
        }
      }
    }
  }

  return grainsSet.size;
}

export const one = (paths: string) => solution(parse(paths));
