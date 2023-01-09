import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('05', () => {
  test.each([
    ['example.txt', 'CMZ'],
    ['puzzle.txt', 'VCTFTJQCG'],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 'MCD'],
    ['puzzle.txt', 'GCFGLDNJZ'],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
