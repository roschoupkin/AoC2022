import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('18', () => {
  test.each([
    ['example.txt', 64],
    ['puzzle.txt', 4636],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 58],
    ['puzzle.txt', 2572],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
