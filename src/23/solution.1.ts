import { parse } from './utils/parse';
import { Context } from './utils/Context';

function solution(parsed: ReturnType<typeof parse>) {
  const { round, elvesList, elvesOccupy } = new Context(...parsed);
  new Array(10).fill(null).forEach(round);

  return elvesOccupy.xDistance * elvesOccupy.yDistance - elvesList.length;
}

export const one = (paths: string) => solution(parse(paths));
