import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('21', () => {
  test.each([
    ['example.txt', 152],
    ['puzzle.txt', 364367103397416],
  ])('part one with file %s', (file, expectation) => {
    expect(one(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });

  test.each([
    ['example.txt', 301],
    ['puzzle.txt', 3782852515583],
  ])('part two with file %s', (file, expectation) => {
    expect(two(path.join(__dirname, 'puzzle', file))).toBe(expectation);
  });
});
