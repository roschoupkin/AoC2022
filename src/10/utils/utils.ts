import { Commands, StrengthsKeys } from './types';
import { COMMANDS_SET, INITIAL_STRENGTHS } from './consts';

export const isCommand = (s?: string): s is Commands => s !== undefined && COMMANDS_SET.has(s);

export const isStrengthsKey = (cycles: number): cycles is StrengthsKeys =>
  cycles in INITIAL_STRENGTHS;
