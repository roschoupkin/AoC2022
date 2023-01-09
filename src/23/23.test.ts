import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('23', () => {
  test.each([
    ['example.txt', 110],
    ['puzzle.txt', 4181],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 20],
    ['puzzle.txt', 973],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
