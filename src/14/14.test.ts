import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('14', () => {
  test.each([
    ['example.txt', 24],
    ['puzzle.txt', 979],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 93],
    ['puzzle.txt', 29044],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
