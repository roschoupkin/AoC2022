import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('14', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(24);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(979);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(93);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(29044);
  });
});
