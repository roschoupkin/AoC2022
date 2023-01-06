import { EStepCost } from './types';

export const AWAITED_TO_WIN = {
  [EStepCost.Rock]: EStepCost.Paper,
  [EStepCost.Paper]: EStepCost.Scissors,
  [EStepCost.Scissors]: EStepCost.Rock,
};

export const RIVAL_COMMAND_MAP = {
  A: EStepCost.Rock,
  B: EStepCost.Paper,
  C: EStepCost.Scissors,
};
