export const safeOwnKeys = <T extends Record<string, unknown>>(o: T): Array<keyof T> =>
  Object.keys(o);
