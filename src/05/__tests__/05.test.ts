import * as path from 'path';

import { one } from '../solution.1';
import { two } from '../solution.2';

describe('05', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, '..', 'example.txt'))).toBe('CMZ');
    expect(one(path.join(__dirname, '..', 'puzzle.txt'))).toBe('VCTFTJQCG');
  });

  test('part two', () => {
    expect(two(path.join(__dirname, '..', 'example.txt'))).toBe('MCD');
    expect(two(path.join(__dirname, '..', 'puzzle.txt'))).toBe('GCFGLDNJZ');
  });
});
