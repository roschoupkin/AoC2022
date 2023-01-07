import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('08', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(21);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(1820);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(8);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(385112);
  });
});
