export const clone = <T extends Record<string, unknown>>(o: T): T => ({ ...o });

export const safeOwnKeys = <T extends Record<string, unknown>>(o: T): Array<keyof T> =>
  Object.keys(o);
