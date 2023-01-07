import { parse } from './utils/parse';

export function two(paths: string) {
  return parse(paths)
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((s, v) => s + v, 0);
}
