import { parse } from './utils/parse';
import { Context } from './utils/Context';

function searchHumn(initial: string, parsed: string[]) {
  const monkeys = new Context(parsed);
  const state = { key: initial, humnYield: Number.NaN };

  while (state.key !== 'humn') {
    const monkey = monkeys.monkey(state.key);
    const stableKey = monkeys.stable(state.key);

    if (!monkey || !stableKey) {
      break;
    }

    const stableValue = monkeys.get(stableKey);
    const isRightSide = stableKey === monkey.right;

    if (state.key === initial) {
      state.humnYield = stableValue;
    } else {
      const inversion = {
        '+': (equality: number) => equality - stableValue,
        '*': (equality: number) => equality / stableValue,
        '/': (equality: number) => (isRightSide ? equality * stableValue : stableValue / equality),
        '-': (equality: number) => (isRightSide ? equality + stableValue : stableValue - equality),
      }[monkey.operand];

      state.humnYield = inversion(state.humnYield);
    }
    state.key = isRightSide ? monkey.left : monkey.right;
  }

  return state.humnYield;
}

const solution = (parsed: ReturnType<typeof parse>) => searchHumn('root', parsed);

export const two = (paths: string) => solution(parse(paths));
