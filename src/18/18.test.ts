import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('18', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(64);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(4636);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(58);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(2572);
  });
});
