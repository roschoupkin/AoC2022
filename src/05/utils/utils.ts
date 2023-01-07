export const normalize = (matrix: string[][]) =>
  matrix
    .map((a) => a[0])
    .join('')
    .replace(/([[|\]])/g, '');
