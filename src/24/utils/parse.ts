import { splitPuzzle } from '../../utils/puzzle';
import { Valley } from './Valley';

export const parse = (paths: string) => new Valley(splitPuzzle(paths, '\n'));
