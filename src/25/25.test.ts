import * as path from 'path';

import { one } from './solution.1';

describe('25', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe('2=-1=0');
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe('20-1-11==0-=0112-222');
  });
});
