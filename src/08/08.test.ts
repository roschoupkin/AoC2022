import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('08', () => {
  test.each([
    ['example.txt', 21],
    ['puzzle.txt', 1820],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 8],
    ['puzzle.txt', 385112],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
