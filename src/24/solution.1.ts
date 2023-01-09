import { parse } from './utils/parse';
import { answer } from './utils/answer';

const solution = (parsed: ReturnType<typeof parse>) => answer(parsed);

export const one = (paths: string) => solution(parse(paths));
