import { Valley } from './Valley';
import { CoordinatesTuple } from './types';
import { Coords } from './Coords';
import { WIND_DIRECTIONS } from './consts';
import { getStateKey } from './utils';

export function answer(
  valley: Valley,
  entry: CoordinatesTuple = [1, 0],
  exit: CoordinatesTuple = [valley.width - 1, valley.height],
  spent = 0
) {
  const settled = new Set<string>();
  const destination = new Coords(...exit);
  const queue: Array<[number, Coords]> = [[spent, new Coords(...entry)]];

  while (queue.length) {
    const state = queue.shift();
    if (!state) {
      break;
    }

    const [minutes, expedition] = state;

    if (expedition.key === destination.key) {
      return minutes;
    }

    const occupied = valley.tick(minutes);

    if (!occupied.has(expedition.key)) {
      queue.push([minutes + 1, expedition]);
    }

    for (const [dx, dy] of Object.values(WIND_DIRECTIONS)) {
      const candidate = new Coords(expedition.x + dx, expedition.y + dy);

      const state_key = getStateKey(minutes + 1, candidate);

      if (valley.inside(candidate) && !occupied.has(candidate.key) && !settled.has(state_key)) {
        queue.push([minutes + 1, candidate]);
        settled.add(state_key);
      }
    }
  }

  return -1;
}
