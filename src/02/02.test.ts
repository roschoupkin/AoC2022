import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('02', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(15);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(12645);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(12);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(11756);
  });
});
