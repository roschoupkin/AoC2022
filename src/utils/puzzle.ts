import * as fs from 'fs';

export function readPuzzle(paths: string) {
  return fs.readFileSync(paths, { encoding: 'utf8', flag: 'r' }).trimEnd();
}

export function splitPuzzle(paths: string, separator: string | RegExp): string[] {
  return readPuzzle(paths).split(separator);
}
