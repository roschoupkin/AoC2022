import { parse } from './utils/parse';
import { Context } from './utils/Context';

const combinations = (list: string[]) =>
  list.reduce<string[][]>((a, v) => a.concat(a.map((r) => [v].concat(r))), [[]]);

function calcTogether(answer: Context, current: string, time: number, list: string[]) {
  let value = 0;

  for (const valves of combinations(list)) {
    const remaining = list.filter((v) => valves.indexOf(v) === -1);

    if (!valves.length) {
      continue;
    }

    const me = answer.best(current, time, valves);
    const elephant = answer.best(current, time, remaining);

    const score = me + elephant;

    if (score > value) {
      value = score;
    }
  }

  return value;
}

function solution({ movesMap, ratesMap, ratedSet }: ReturnType<typeof parse>) {
  const answer = new Context(movesMap, ratesMap);
  return calcTogether(answer, 'AA', 26, [...ratedSet.keys()]);
}

export const two = (paths: string) => solution(parse(paths));
