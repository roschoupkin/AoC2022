import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('24', () => {
  test.each([
    ['example.txt', 18],
    ['puzzle.txt', 251],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 54],
    ['puzzle.txt', 758],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
