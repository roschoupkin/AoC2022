import { Coords, Point } from './types';

export const calcRadius = (sensor: Coords, beacon: Coords) =>
  Math.abs(sensor.x - beacon.x) + Math.abs(sensor.y - beacon.y);

export const inRange = (x: number, min: number, max: number) => (x - min) * (x - max) <= 0;

const calcLength = ({ y: sy }: Pick<Coords, 'y'>, by: number, r: number) => r - Math.abs(sy - by);

export function calcRanges(y: number, points: Point[]) {
  const ranges: Array<[number, number]> = [];

  for (const { sensor, radius } of points) {
    const length = calcLength(sensor, y, radius);
    if (length >= 0) {
      ranges.push([sensor.x - length, sensor.x + length]);
    }
  }

  return ranges.sort((a, b) => a[0] - b[0]);
}
