import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('15', () => {
  test.each([
    ['example.txt', 10, 26],
    ['puzzle.txt', 2000000, 4883971],
  ])('part one with file %s', (file, y, expectation) => {
    expect(one(y, path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 20, 56000011],
    ['puzzle.txt', 4000000, 12691026767556],
  ])('part two with file %s', (file, max, expectation) => {
    expect(two(max, path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
