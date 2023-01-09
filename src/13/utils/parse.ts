import { splitPuzzle } from '../../utils/puzzle';
import { Packets } from './types';

function isPacket(parsed: unknown): parsed is Packets[] {
  return Array.isArray(parsed);
}

function parseLine(line: string): Packets[] {
  const parsed = JSON.parse(line);
  if (isPacket(parsed)) {
    return parsed;
  }
  throw new Error('Wrong input');
}

export function parse(paths: string) {
  const packets: Array<Packets[]> = [];
  const puzzle = splitPuzzle(paths, '\n\n');

  for (const packet of puzzle) {
    for (const line of packet.split('\n')) {
      packets.push(parseLine(line));
    }
  }

  return packets;
}
