import { parse } from './utils/parse';
import { Context } from './utils/Context';

const solution = (parsed: ReturnType<typeof parse>) => new Context(parsed).get('root');

export const one = (paths: string) => solution(parse(paths));
