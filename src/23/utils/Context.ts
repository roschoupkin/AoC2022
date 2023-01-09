import { Elf } from './Elf';
import { DIRECTIONS_DICT, DIRECTIONS_TO_CHECK_DICT } from './consts';
import { safeOwnKeys } from './utils';
import { ElvesOccupy } from './ElvesOccupy';
import { DirectionsSequence } from './DirectionsSequence';

export class Context {
  constructor(
    public readonly elvesList: Elf[],
    public readonly elvesOccupy: ElvesOccupy,
    public readonly directionSequence: DirectionsSequence
  ) {}

  public readonly round = () => {
    const candidates = [];

    for (const elf of this.elvesList) {
      candidates.push(this.candidate(elf));
    }

    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (!candidate) {
        continue;
      }

      const [candidate_x, candidate_y] = candidate.value;
      const has_rival = candidates.some((rival, index) => {
        return index !== i && rival.value[0] === candidate_x && rival.value[1] === candidate_y;
      });

      if (!has_rival) {
        candidate.apply();
      }
    }

    this.elvesOccupy.clear();

    for (const elf of this.elvesList) {
      const [x, y] = elf.current;
      this.elvesOccupy.set(x, y);
    }

    this.directionSequence.next();
  };

  private readonly candidate = (elf: Elf) => {
    if (
      safeOwnKeys(DIRECTIONS_DICT)
        .map(elf.next)
        .every(([x, y]) => !this.elvesOccupy.has(x, y))
    ) {
      return elf.candidate();
    }

    for (const directionKey of this.directionSequence.value) {
      const directionsToCheck = DIRECTIONS_TO_CHECK_DICT[directionKey];

      if (directionsToCheck.map(elf.next).every(([x, y]) => !this.elvesOccupy.has(x, y))) {
        return elf.candidate(directionKey);
      }
    }

    return elf.candidate();
  };
}
