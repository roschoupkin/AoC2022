import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('12', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(31);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(383);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(29);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(377);
  });
});
