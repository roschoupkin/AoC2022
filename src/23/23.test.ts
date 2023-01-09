import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('23', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(110);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(4181);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(20);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(973);
  });
});
