import { Operand } from './types';
import { OPERANDS_SET } from './consts';

export const isOperand = (operand?: string): operand is Operand =>
  operand !== undefined && OPERANDS_SET.has(operand);

export function isCorrectValueMatch(
  match: string[]
): match is [m: string, monkey: string, value: string] {
  const [, monkey, value] = match;
  return [monkey, value].every(Boolean);
}

export function isCorrectOperationMatch(
  match: string[]
): match is [m: string, monkey: string, left: string, operand: Operand, right: string] {
  const [, monkey, left, operand, right] = match;
  return [monkey, left, right].every(Boolean) && isOperand(operand);
}
