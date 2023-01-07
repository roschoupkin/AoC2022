import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('03', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(157);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(7850);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(70);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(2581);
  });
});
