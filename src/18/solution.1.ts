import { parse } from './utils/parse';
import { Context } from './utils/Context';

function solution([cubes, cubesSet]: ReturnType<typeof parse>) {
  const { calcSurfaces } = new Context(cubesSet);
  return cubes.reduce((surfaces, cube) => surfaces + calcSurfaces(...cube), 0);
}

export const one = (paths: string) => solution(parse(paths));
