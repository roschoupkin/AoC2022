import * as fs from 'fs';

export function readPuzzle(paths: string, separator: string | RegExp): string[] {
  return fs.readFileSync(paths, { encoding: 'utf8', flag: 'r' }).trimEnd().split(separator);
}
