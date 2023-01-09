import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('19', () => {
  test.each([
    ['example.txt', 33],
    ['puzzle.txt', 1382],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 2604],
    ['puzzle.txt', 31740],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
