import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('11', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(10605);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(98280);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(2713310158);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(17673687232);
  });
});
