import { splitPuzzle } from '../../utils/puzzle';
import { Matrix } from './Matrix';
import { Route, TurnRoute } from './types';

function generateMapMatrixInfo(map: string) {
  const lines = map.split('\n').filter(Boolean);

  const rowsSize = lines.length + 1;
  const colsSize = Math.max(...lines.map((line) => line.length + 1));

  const xRanges = new Map<number, [min: number, max: number]>();
  const yRanges = new Map<number, [min: number, max: number]>();

  const pivot = { x: -1, y: -1 };

  const matrix = new Matrix<string>();

  for (let y = 1; y < rowsSize; y++) {
    const values = lines[y - 1]?.split('') ?? [];

    for (let x = 1; x < colsSize; x++) {
      const value = values[x - 1]?.trim();
      if (value) {
        matrix.set(x, y, value);
      }

      if (value === '#' || value === '.') {
        const [x_min, x_max] = xRanges.get(y) ?? [Infinity, -Infinity];
        xRanges.set(y, [Math.min(x, x_min), Math.max(x, x_max)]);

        const [y_min, y_max] = yRanges.get(x) ?? [Infinity, -Infinity];
        yRanges.set(x, [Math.min(y, y_min), Math.max(y, y_max)]);
      }

      if (value === '.' && pivot.x < 0 && pivot.y < 0) {
        pivot.x = x;
        pivot.y = y;
      }
    }
  }

  return {
    pivot,
    matrix,
    xRanges,
    yRanges,
  };
}

const isTurnRoute = (route: string): route is TurnRoute => ['R', 'L'].includes(route);

function convertToRoute(route: string): Route | null {
  if (/\d+/.test(route)) {
    return Number(route);
  }
  return isTurnRoute(route) ? route : null;
}

export function parse(paths: string) {
  const [puzzleMap, puzzleRoutes] = splitPuzzle(paths, '\n\n');

  if (!puzzleMap || !puzzleRoutes) {
    throw new Error('Wrong input');
  }

  const map = generateMapMatrixInfo(puzzleMap);

  const routes: Route[] = [];

  for (const char of puzzleRoutes.match(/([RL]|\d+)/g) ?? []) {
    const route = convertToRoute(char);
    if (route !== null) {
      routes.push(route);
    }
  }

  return { ...map, routes: routes.reverse() };
}
