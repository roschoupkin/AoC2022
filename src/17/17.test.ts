import * as path from 'path';

import { one } from './solution.1';

describe('17', () => {
  test.each([
    ['example.txt', 3068],
    ['puzzle.txt', 3081],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
