import { Packets } from './types';

const ensureArray = <TValue>(value: TValue | TValue[]): TValue[] =>
  Array.isArray(value) ? value : [value];

const cloneDeep = <TValue>(value: TValue): TValue => JSON.parse(JSON.stringify(value));

export function isCorrectPackets(packets: [Packets[], Packets[]]): boolean | null {
  const clone = cloneDeep(packets);
  while (clone[0].length && clone[1].length) {
    const left = clone[0].shift();
    const right = clone[1].shift();

    if (typeof left === 'number' && typeof right === 'number') {
      if (left === right) {
        continue;
      }
      return left < right;
    }

    const patch: [Packets[], Packets[]] = [ensureArray(left), ensureArray(right)];

    const decision = isCorrectPackets(patch);
    if (typeof decision === 'boolean') {
      return decision;
    }
  }

  if (clone[0].length === clone[1].length) {
    return null;
  }
  return clone[0].length < clone[1].length;
}
