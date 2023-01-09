import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('11', () => {
  test.each([
    ['example.txt', 10605],
    ['puzzle.txt', 98280],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 2713310158],
    ['puzzle.txt', 17673687232],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
