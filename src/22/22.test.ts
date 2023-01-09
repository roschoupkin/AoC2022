import * as path from 'path';

import { one } from './solution.1';

describe('22', () => {
  test.each([
    ['example.txt', 6032],
    ['puzzle.txt', 136054],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
