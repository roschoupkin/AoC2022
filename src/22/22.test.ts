import * as path from 'path';

import { one } from './solution.1';

describe('22', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(6032);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(136054);
  });
});
