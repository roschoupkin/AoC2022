import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('20', () => {
  test.each([
    ['example.txt', 3],
    ['puzzle.txt', 6387],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 1623178306],
    ['puzzle.txt', 2455057187825],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
