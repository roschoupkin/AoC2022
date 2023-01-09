import { parse } from './utils/parse';
import { answer } from './utils/answer';

const solution = (parsed: ReturnType<typeof parse>) => answer(parsed, 10, 811589153);

export const two = (paths: string) => solution(parse(paths));
