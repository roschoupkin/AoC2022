import { parse } from './utils/parse';
import { AnswerHelper } from './utils/AnswerHelper';

function solution({ movesMap, ratedSet, ratesMap }: ReturnType<typeof parse>) {
  const answer = new AnswerHelper(movesMap, ratesMap);
  return answer.best('AA', 30, [...ratedSet.keys()]);
}

export const one = (paths: string) => solution(parse(paths));
