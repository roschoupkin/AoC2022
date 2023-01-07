import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('07', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(95437);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(1307902);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(24933642);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(7068748);
  });
});
