import { Context } from './context';
import { isCommand, isStrengthsKey } from './utils';

export function answer(parsed: string[]) {
  const context = new Context();

  for (const line of parsed) {
    const [, command, value] = line.match(new RegExp(/^(noop|addx)\s?(-?\d+)?$/)) ?? [];
    const addx = Number(value);

    if (!isCommand(command)) {
      continue;
    }

    const cycles = command === 'noop' ? 1 : 2;

    for (let i = 0; i < cycles; i++) {
      context.crtMatrix[context.crt.row]?.push(context.hasIntersection ? '#' : '.');

      context.cycles++;
      context.crt.pixel++;

      if (context.crt.pixel === 40) {
        context.crt.row++;
        context.crt.pixel = 0;
        context.crtMatrix.push([]);
      }

      if (isStrengthsKey(context.cycles)) {
        context.strengths[context.cycles] = context.x * context.cycles;
      }
    }

    if (command === 'addx' && Number.isFinite(addx)) {
      context.x += addx;
    }
  }

  return context;
}
