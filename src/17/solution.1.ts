import { parse } from './utils/parse';
import { iterator } from './utils/utils';
import { ROCKS } from './utils/consts';
import { Area } from './utils/Area';

const LAST = 2022;

function solution(parsed: ReturnType<typeof parse>) {
  const area = new Area();

  const jets = iterator(parsed);
  const rocks = iterator(ROCKS);

  while (area.rocks < LAST) {
    const next_rock = rocks.next().value;
    const rock = next_rock.init(2, area.size + 3);

    const allowed = { vertical: true };

    while (allowed.vertical) {
      const jet = jets.next().value;

      const move_horizontal = rock.next(jet, 0);
      if (area.inside(move_horizontal) && area.valid(move_horizontal)) {
        move_horizontal.apply();
      }

      const move_vertical = rock.next(0, -1);
      allowed.vertical = area.valid(move_vertical);
      if (allowed.vertical) {
        move_vertical.apply();
      }
    }

    area.freeze(rock);
  }

  return area.size;
}

export const one = (paths: string) => solution(parse(paths));
