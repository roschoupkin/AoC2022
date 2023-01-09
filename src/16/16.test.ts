import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('16', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(1651);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(1728);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(1707);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(2304);
  });
});
