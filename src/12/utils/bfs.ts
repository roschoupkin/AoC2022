import { charWeight, createPoint } from './utils';
import { BfsQueue, Point } from './types';

const createNextMoves = (m: string[][], point: Point) => {
  const pointWeight = charWeight(m, point.row, point.column);
  const nextMoves: Array<Point> = [];

  if (pointWeight === -1) {
    return nextMoves;
  }

  const possibleMoves = [
    [point.row - 1, point.column],
    [point.row + 1, point.column],
    [point.row, point.column - 1],
    [point.row, point.column + 1],
  ] as const;

  for (const [row, column] of possibleMoves) {
    const moveWeight = charWeight(m, row, column);
    if (moveWeight >= 0 && moveWeight - pointWeight <= 1) {
      nextMoves.push(createPoint(row, column));
    }
  }

  return nextMoves;
};

export function bfs(m: string[][], start: Point, finish: Point) {
  const visited = new Set();
  const queue: BfsQueue = [[start, 0]];

  while (queue.length > 0) {
    const chain = queue.shift();

    if (!chain) {
      break;
    }

    for (const move of createNextMoves(m, chain[0])) {
      const length = chain[1] + 1;

      if (move.key === finish.key) {
        return length;
      }

      if (!visited.has(move.key)) {
        visited.add(move.key);
        queue.push([move, length]);
      }
    }
  }

  return 0;
}
