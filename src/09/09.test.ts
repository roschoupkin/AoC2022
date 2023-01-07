import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('09', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(13);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(5902);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(1);
    expect(two(path.join(__dirname, 'puzzle', 'larger.txt'))).toBe(36);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(2445);
  });
});
