import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('02', () => {
  test.each([
    ['example.txt', 15],
    ['puzzle.txt', 12645],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 12],
    ['puzzle.txt', 11756],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
