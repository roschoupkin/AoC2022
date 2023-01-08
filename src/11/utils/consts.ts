import { UnionsToTuple } from 'ts-type-helpers';
import { OperationSymbol, PuzzleParts } from './types';

export const OPERATIONS_LIST: UnionsToTuple<OperationSymbol> = ['+', '*'];
export const OPERATIONS_SET = new Set<string>(OPERATIONS_LIST);

export const PARSE_PARTS: Record<PuzzleParts, RegExp> = {
  id: /Monkey (\d+):/,
  items: /Starting items: (.*)/,
  operation: /Operation: new = old (\W) (old|\d+)/,
  mod: /Test: divisible by (\d+)/,
  positive: /If true: throw to monkey (\d+)/,
  negative: /If false: throw to monkey (\d+)/,
};
