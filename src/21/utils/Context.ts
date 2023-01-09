import { MONKEY_WITH_OPERATION_REGEX, MONKEY_WITH_VALUE_REGEX } from './consts';
import { isCorrectOperationMatch, isCorrectValueMatch } from './guards';
import { AboutMonkey } from './types';

export class Context {
  private readonly state: Record<string, () => number> = {};
  private readonly about: Record<string, AboutMonkey> = {};

  constructor(puzzle: string[]) {
    for (const line of puzzle) {
      const with_value_match = line.match(MONKEY_WITH_VALUE_REGEX) ?? [];
      if (isCorrectValueMatch(with_value_match)) {
        const [, monkey, value] = with_value_match;
        this.set(monkey, Number(value));
      }

      const with_operation_match = line.match(MONKEY_WITH_OPERATION_REGEX) ?? [];
      if (isCorrectOperationMatch(with_operation_match)) {
        const [, monkey, left, operand, right] = with_operation_match;
        const operation = {
          '+': () => this.get(left) + this.get(right),
          '*': () => this.get(left) * this.get(right),
          '/': () => this.get(left) / this.get(right),
          '-': () => this.get(left) - this.get(right),
        }[operand];

        this.set(monkey, operation);
        this.about[monkey] = {
          left,
          right,
          operand,
        };
      }
    }
  }

  public get = (key: string) => {
    const callback = this.state[key];
    if (!callback) {
      throw new Error('Wrong key');
    }
    return callback();
  };

  public set = (key: string, value: number | (() => number)) => {
    this.state[key] = typeof value === 'function' ? value : () => value;
  };

  public stable = (key: string) => {
    const monkey = this.monkey(key);

    if (monkey?.left != null && monkey?.right != null) {
      const left_set = new Set();
      const right_set = new Set();

      for (let test = 0; test < 3; test++) {
        this.set('humn', test);
        left_set.add(this.get(monkey.left));
        right_set.add(this.get(monkey.right));
      }

      if (left_set.size === 1) {
        return monkey.left;
      }
      if (right_set.size === 1) {
        return monkey.right;
      }
    }

    return null;
  };

  public monkey = (key: string) => this.about[key] ?? null;
}
