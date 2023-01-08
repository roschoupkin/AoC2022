import { parse } from './utils/parse';
import { answer } from './utils/answer';

const gcd = (a: number, b: number): number => (!b ? a : gcd(b, a % b));

function solution(parsed: ReturnType<typeof parse>) {
  const list = Object.values(parsed);
  const [firstMonkey] = list;

  if (!firstMonkey) {
    return -1;
  }

  const lcm = list.reduce(
    (hcf, monkey) => (hcf * monkey.divider) / gcd(hcf, monkey.divider),
    firstMonkey.divider
  );

  return answer(parsed, 10000, (x) => x % lcm);
}

export const two = (paths: string) => solution(parse(paths));
