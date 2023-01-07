import { splitPuzzle } from '../../utils/puzzle';

export function parse(paths: string) {
  const pwd: string[] = [];
  const structure: Record<string, number> = {};

  const puzzle = splitPuzzle(paths, '\n');

  for (const command of puzzle) {
    if (command.indexOf('$ ls') >= 0) {
      continue;
    }

    const [, destination] = command.match(/^\$ cd (.*)$/) ?? [];

    if (destination) {
      if (destination === '..') {
        pwd.pop();
      } else {
        pwd.push(destination);
      }
    }

    const [size] = (command.match(/^(\d+)/) ?? []).map(Number);

    if (size !== undefined && Number.isFinite(size)) {
      const path = [];
      for (const directory of pwd) {
        path.push(directory);

        const key: string = path.join('/').replace('//', '/');

        if (!(key in structure)) {
          structure[key] = 0;
        }
        structure[key] += size;
      }
    }
  }

  return structure;
}
