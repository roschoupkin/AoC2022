import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('10', () => {
  test.each([
    ['example.txt', 13140],
    ['puzzle.txt', 14620],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([['example.txt'], ['puzzle.txt']])('part two with file %s', (file) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toMatchSnapshot();
  });
});
