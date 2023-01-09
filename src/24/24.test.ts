import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('24', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(18);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(251);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(54);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(758);
  });
});
