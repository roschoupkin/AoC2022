import { UnionsToTuple } from 'ts-type-helpers';
import { Commands, Strengths } from './types';

export const COMMANDS_LIST: UnionsToTuple<Commands> = ['noop', 'addx'];
export const COMMANDS_SET = new Set<string>(COMMANDS_LIST);

export const INITIAL_STRENGTHS: Strengths = {
  20: 0,
  60: 0,
  100: 0,
  140: 0,
  180: 0,
  220: 0,
};
