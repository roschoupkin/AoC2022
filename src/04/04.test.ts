import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('04', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(2);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(573);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(4);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(867);
  });
});
