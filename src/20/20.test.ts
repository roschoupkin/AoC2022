import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('20', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(3);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(6387);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(1623178306);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(2455057187825);
  });
});
