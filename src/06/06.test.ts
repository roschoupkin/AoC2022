import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('06', () => {
  test.each([
    ['example.txt', 7],
    ['puzzle.txt', 1848],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 19],
    ['puzzle.txt', 2308],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
