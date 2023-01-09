import * as path from 'path';

import { one } from './solution.1';

describe('25', () => {
  test.each([
    ['example.txt', '2=-1=0'],
    ['puzzle.txt', '20-1-11==0-=0112-222'],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
