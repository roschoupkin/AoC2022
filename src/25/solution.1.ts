import { parse } from './utils/parse';
import { decimalToSnafu, snafuToDecimal } from './utils/decoders';

const solution = (parsed: ReturnType<typeof parse>) =>
  decimalToSnafu(parsed.reduce((total, snafu) => total + snafuToDecimal(snafu), 0));

export const one = (paths: string) => solution(parse(paths));
