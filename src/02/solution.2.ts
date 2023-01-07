import { Puzzle } from '../utils/Puzzle';
import { convertToAction } from './utils/utils';
import { EResultCost } from './utils/types';
import { AWAITED_TO_WIN, RIVAL_COMMAND_MAP } from './utils/consts';

const MY_COMMANDS_MAP = {
  X: EResultCost.Lose,
  Y: EResultCost.Draw,
  Z: EResultCost.Win,
};

export function two(paths: string) {
  const { puzzle } = new Puzzle(paths).parts('\n').convert(convertToAction);
  return puzzle.reduce((result, commands) => {
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
