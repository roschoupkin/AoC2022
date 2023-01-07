import { searchStartOfPacket } from './utils/utils';
import { parse } from './utils/parse';

function solution(parsed: ReturnType<typeof parse>) {
  return searchStartOfPacket(parsed, 14);
}

export const two = (paths: string) => solution(parse(paths));
