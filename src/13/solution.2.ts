import { parse } from './utils/parse';
import { isCorrectPackets } from './utils/utils';

function solution(p: ReturnType<typeof parse>) {
  const dividers = [[[2]], [[6]]];
  const dividerPackets = dividers.map((key) => JSON.stringify(key));

  const sorted = [...p, ...dividers]
    .sort((a, b) => {
      const decision = isCorrectPackets([a, b]);
      if (typeof decision === 'boolean') {
        return decision ? -1 : 1;
      }
      return 0;
    })
    .map((a) => JSON.stringify(a));

  const indexes = [];

  for (let i = 0; i < sorted.length; i++) {
    const packet = sorted[i];
    if (packet !== undefined && dividerPackets.includes(packet)) {
      indexes.push(i + 1);
    }
  }

  return indexes.reduce((multi, i) => multi * i, 1);
}

export const two = (paths: string) => solution(parse(paths));
