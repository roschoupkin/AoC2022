import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('16', () => {
  test.each([
    ['example.txt', 1651],
    ['puzzle.txt', 1728],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 1707],
    ['puzzle.txt', 2304],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
