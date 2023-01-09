const SNAFU_TO_DECIMAL_ENTRIES: Array<[string, number]> = [
  ['=', -2],
  ['-', -1],
  ['0', 0],
  ['1', 1],
  ['2', 2],
];

export const SNAFU_TO_DECIMAL_MAP = new Map<string, number>(SNAFU_TO_DECIMAL_ENTRIES);
export const DECIMAL_TO_SNAFU_MAP = new Map<number, string>(
  SNAFU_TO_DECIMAL_ENTRIES.map(([str, num]) => [num, str])
);
