import { MonkeysDict } from './types';

export function answer(monkeys: MonkeysDict, rounds: number, divide: (x: number) => number) {
  const list = Object.values(monkeys);

  for (let round = 0; round < rounds; round++) {
    for (const id in monkeys) {
      const monkey = monkeys[id];
      if (!monkey) {
        continue;
      }

      const { mod, operation, positive, negative, items } = monkey;

      for (const item of items) {
        monkey.inspections++;

        const level = divide(operation(item));
        const to = mod(level) === 0 ? positive : negative;
        monkeys[to]?.addItem(level);
      }

      monkey.clearItems();
    }
  }

  const [first, second] = list.sort((a, b) => b.inspections - a.inspections);

  if (!first || !second) {
    return -1;
  }

  return first.inspections * second.inspections;
}
