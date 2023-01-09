import { DECIMAL_TO_SNAFU_MAP, SNAFU_TO_DECIMAL_MAP } from './consts';

export function snafuToDecimal(snafu: string): number {
  let decimal = 0;

  const digits = snafu.split('').reverse();

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    if (digit !== undefined) {
      const dec = SNAFU_TO_DECIMAL_MAP.get(digit);
      if (dec !== undefined) {
        decimal += dec * Math.pow(5, i);
      }
    }
  }

  return decimal;
}

export function decimalToSnafu(decimal: number): string {
  const snafu_parts: string[] = [];

  while (decimal > 0) {
    const remainder = ((decimal + 2) % 5) - 2;
    decimal = Math.floor((decimal + 2) / 5);
    const snafu = DECIMAL_TO_SNAFU_MAP.get(remainder);
    if (snafu !== undefined) {
      snafu_parts.push(snafu);
    }
  }

  return snafu_parts.reverse().join('');
}
