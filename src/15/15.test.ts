import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('15', () => {
  test('part one', () => {
    expect(one(10, path.join(__dirname, 'puzzle', 'example.txt'))).toBe(26);
    expect(one(2000000, path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(4883971);
  });

  test('part two', () => {
    expect(two(20, path.join(__dirname, 'puzzle', 'example.txt'))).toBe(56000011);
    expect(two(4000000, path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(12691026767556);
  });
});
