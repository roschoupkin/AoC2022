import * as path from 'path';

import { one } from './solution.1';

describe('17', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(3068);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(3081);
  });
});
