import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('01', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(24000);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(71506);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(45000);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(209603);
  });
});
