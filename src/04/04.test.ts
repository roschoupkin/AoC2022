import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('04', () => {
  test.each([
    ['example.txt', 2],
    ['puzzle.txt', 573],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 4],
    ['puzzle.txt', 867],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
