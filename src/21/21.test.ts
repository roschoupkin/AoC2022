import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('21', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(152);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(364367103397416);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(301);
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(3782852515583);
  });
});
