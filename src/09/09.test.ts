import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('09', () => {
  test.each([
    ['example.txt', 13],
    ['puzzle.txt', 5902],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 1],
    ['larger.txt', 36],
    ['puzzle.txt', 2445],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
