import { Monkey } from './Monkey';

export type PuzzleParts = 'id' | 'mod' | 'operation' | 'items' | 'positive' | 'negative';
export type OperationSymbol = '*' | '+';

export type MonkeysDict = Record<number, Monkey>;
