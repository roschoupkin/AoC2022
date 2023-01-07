import { EResultCost, EStepCost } from './utils/types';
import { AWAITED_TO_WIN, RIVAL_COMMAND_MAP } from './utils/consts';
import { parse } from './utils/parse';

const MY_COMMANDS_MAP = {
  X: EStepCost.Rock,
  Y: EStepCost.Paper,
  Z: EStepCost.Scissors,
};

export function one(paths: string) {
  return parse(paths).reduce((result, commands) => {
    const me = MY_COMMANDS_MAP[commands[1]];
    const rival = RIVAL_COMMAND_MAP[commands[0]];

    const round = (() => {
      switch (me) {
        case rival:
          return EResultCost.Draw;
        case AWAITED_TO_WIN[rival]:
          return EResultCost.Win;
        default:
          return EResultCost.Lose;
      }
    })();

    return result + me + round;
  }, 0);
}
