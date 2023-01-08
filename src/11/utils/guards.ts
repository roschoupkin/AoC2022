import { OperationSymbol } from './types';
import { OPERATIONS_SET } from './consts';

export const isOperation = (o?: string): o is OperationSymbol =>
  o !== undefined && OPERATIONS_SET.has(o);
