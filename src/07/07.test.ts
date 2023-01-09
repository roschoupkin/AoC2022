import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('07', () => {
  test.each([
    ['example.txt', 95437],
    ['puzzle.txt', 1307902],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 24933642],
    ['puzzle.txt', 7068748],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
