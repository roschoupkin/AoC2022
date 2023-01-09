import { Position } from './types';

export const createKey = (...position: Position) => position.join(';');
