import { parse } from './utils/parse';
import { searchStartOfPacket } from './utils/utils';

function solution(parsed: ReturnType<typeof parse>) {
  return searchStartOfPacket(parsed, 4);
}

export const one = (paths: string) => solution(parse(paths));
