export const total = (s: string) =>
  s.split('\n').reduce((s, v) => {
    const num = Number(v);
    if (Number.isFinite(num)) {
      s += num;
    }
    return s;
  }, 0);
