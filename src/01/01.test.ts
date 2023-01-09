import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('01', () => {
  test.each([
    ['example.txt', 24000],
    ['puzzle.txt', 71506],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 45000],
    ['puzzle.txt', 209603],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
