import { parse } from './utils/parse';
import { Context } from './utils/Context';

function solution({ movesMap, ratedSet, ratesMap }: ReturnType<typeof parse>) {
  const answer = new Context(movesMap, ratesMap);
  return answer.best('AA', 30, [...ratedSet.keys()]);
}

export const one = (paths: string) => solution(parse(paths));
