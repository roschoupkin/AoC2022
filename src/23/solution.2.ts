import { parse } from './utils/parse';
import { Context } from './utils/Context';

const CONDITION = { current: true };

function solution(parsed: ReturnType<typeof parse>) {
  const { round, elvesList } = new Context(...parsed);

  let rounds = 0;

  while (CONDITION.current) {
    round();
    rounds++;

    if (elvesList.every((elf) => elf.didNotMove)) {
      break;
    }
  }

  return rounds;
}

export const two = (paths: string) => solution(parse(paths));
