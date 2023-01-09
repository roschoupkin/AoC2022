import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('12', () => {
  test.each([
    ['example.txt', 31],
    ['puzzle.txt', 383],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 29],
    ['puzzle.txt', 377],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
