import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('03', () => {
  test.each([
    ['example.txt', 157],
    ['puzzle.txt', 7850],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 70],
    ['puzzle.txt', 2581],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
