import { EResultCost } from './utils/types';
import { AWAITED_TO_WIN, RIVAL_COMMAND_MAP } from './utils/consts';
import { parse } from './utils/parse';

const MY_COMMANDS_MAP = {
  X: EResultCost.Lose,
  Y: EResultCost.Draw,
  Z: EResultCost.Win,
};

function solution(parsed: ReturnType<typeof parse>) {
  return parsed.reduce((result, commands) => {
    const me = MY_COMMANDS_MAP[commands[1]];
    const rival = RIVAL_COMMAND_MAP[commands[0]];

    const round = (() => {
      switch (me) {
        case EResultCost.Draw:
          return rival;
        case EResultCost.Win:
          return AWAITED_TO_WIN[rival];
        default:
          return AWAITED_TO_WIN[AWAITED_TO_WIN[rival]];
      }
    })();

    return result + me + round;
  }, 0);
}

export const two = (paths: string) => solution(parse(paths));
