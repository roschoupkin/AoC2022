import * as path from 'path';

import { one } from './solution.1';
import { two } from './solution.2';

describe('10', () => {
  test('part one', () => {
    expect(one(path.join(__dirname, 'puzzle', 'example.txt'))).toBe(13140);
    expect(one(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toBe(14620);
  });

  test('part two', () => {
    expect(two(path.join(__dirname, 'puzzle', 'example.txt'))).toMatchSnapshot();
    expect(two(path.join(__dirname, 'puzzle', 'puzzle.txt'))).toMatchSnapshot();
  });
});
