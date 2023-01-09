import { UnionsToTuple } from 'ts-type-helpers';
import { Operand } from './types';

export const MONKEY_WITH_VALUE_REGEX = /^(\w+): (\d+)$/;
export const MONKEY_WITH_OPERATION_REGEX = /^(\w+): (\w+) ([-/+*]) (\w+)$/;

const OPERANDS_LIST: UnionsToTuple<Operand> = ['+', '-', '*', '/'];
export const OPERANDS_SET = new Set<string>(OPERANDS_LIST);
