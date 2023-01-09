import { splitPuzzle } from '../../utils/puzzle';
import { Elf } from './Elf';
import { ElvesOccupy } from './ElvesOccupy';
import { DirectionsSequence } from './DirectionsSequence';

export function parse(paths: string) {
  const puzzle = splitPuzzle(paths, '\n');

  const elves: Elf[] = [];

  for (let y = 0; y < puzzle.length; y++) {
    const line = puzzle[y]?.split('');

    if (!line) {
      continue;
    }

    for (let x = 0; x < line.length; x++) {
      if (line[x] === '#') {
        elves.push(new Elf([x, y]));
      }
    }
  }

  return [elves, new ElvesOccupy(puzzle), new DirectionsSequence()] as const;
}
