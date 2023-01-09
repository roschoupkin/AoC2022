import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('13', () => {
  test.each([
    ['example.txt', 13],
    ['puzzle.txt', 5808],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 140],
    ['puzzle.txt', 22713],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
