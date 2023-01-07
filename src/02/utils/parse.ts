import { UnionsToTuple } from 'ts-type-helpers';
import { MyCommands, RivalCommands } from './types';
import { splitPuzzle } from '../../utils/puzzle';

const MY_COMMANDS_LIST: UnionsToTuple<MyCommands> = ['X', 'Y', 'Z'];
const RIVAL_COMMANDS_LIST: UnionsToTuple<RivalCommands> = ['A', 'B', 'C'];

const MY_COMMANDS_SET = new Set<string>(MY_COMMANDS_LIST);
const RIVAL_COMMANDS_SET = new Set<string>(RIVAL_COMMANDS_LIST);

const isCommandsTuple = (candidate: string[]): candidate is [RivalCommands, MyCommands] =>
  RIVAL_COMMANDS_SET.has(candidate[0] ?? '') && MY_COMMANDS_SET.has(candidate[1] ?? '');

function convert(line: string): [RivalCommands, MyCommands] {
  const commands = line.split(' ');
  if (isCommandsTuple(commands)) {
    return commands;
  }
  throw new Error('Wrong line');
}

export function parse(paths: string) {
  return splitPuzzle(paths, '\n').map(convert);
}
