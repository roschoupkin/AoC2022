export const getWeight = (char: string) =>
  char.charCodeAt(0) - (/[A-Z]/.test(char) ? 'A'.charCodeAt(0) - 27 : 'a'.charCodeAt(0) - 1);

export const getWeights = (str = '') =>
  [...new Set(str.split('').map(getWeight))].sort((a, b) => a - b);

export const findIntersection = (...values: number[][]) => {
  const [first = [], ...other] = values.sort((a, b) => a.length - b.length);
  for (const weight of first) {
    if (other.every((list) => list.includes(weight))) {
      return weight;
    }
  }
  return 0;
};
