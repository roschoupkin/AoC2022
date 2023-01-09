import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('19', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(33);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(1382);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(2604);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(31740);
  });
});
