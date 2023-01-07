import * as path from 'path';

import { one } from '../solution.1';
import { two } from '../solution.2';

describe('06', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, '..', 'example.txt'))).toBe(7);
    expect(one(path.join(__dirname, '..', 'puzzle.txt'))).toBe(1848);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, '..', 'example.txt'))).toBe(19);
    expect(two(path.join(__dirname, '..', 'puzzle.txt'))).toBe(2308);
  });
});
