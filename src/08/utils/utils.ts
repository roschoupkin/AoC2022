import { Visibility, Pivot } from './types';

export function run(matrix: number[][], calculate: (pivot: Pivot, visibility: Visibility) => void) {
  const getPivot = (y: number, x: number) => matrix[y]?.[x] ?? -Infinity;
  const getCellHeight = (y: number, x: number) => matrix[y]?.[x] ?? -1;

  for (let y = 0; y < matrix.length; y++) {
    const row = matrix[y];
    if (!row?.length) {
      throw new Error('Wrong input');
    }

    for (let x = 0; x < row.length; x++) {
      const pivot = getPivot(y, x);

      const visibility: Visibility = {
        top: [y, y],
        bottom: [y, y],
        left: [x, x],
        right: [x, x],
      };

      while (visibility.top[1] > 0) {
        visibility.top[1] -= 1;
        if (pivot <= getCellHeight(visibility.top[1], x)) {
          break;
        }
        visibility.top[0] -= 1;
      }

      while (visibility.left[1] > 0) {
        visibility.left[1] -= 1;
        if (pivot <= getCellHeight(y, visibility.left[1])) {
          break;
        }
        visibility.left[0] -= 1;
      }

      while (visibility.bottom[1] < matrix.length - 1) {
        visibility.bottom[1] += 1;
        if (pivot <= getCellHeight(visibility.bottom[1], x)) {
          break;
        }
        visibility.bottom[0] += 1;
      }

      while (visibility.right[1] < row.length - 1) {
        visibility.right[1] += 1;
        if (pivot <= getCellHeight(y, visibility.right[1])) {
          break;
        }
        visibility.right[0] += 1;
      }

      calculate({ x, y }, visibility);
    }
  }
}
