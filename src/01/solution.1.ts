import { parse } from './utils/parse';

export function one(paths: string) {
  return parse(paths).reduce((largest, amount) => (amount > largest ? amount : largest), 0);
}
