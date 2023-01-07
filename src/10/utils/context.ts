import { INITIAL_STRENGTHS } from './consts';
import { Strengths } from './types';

export class Context {
  public x = 1;
  public cycles = 0;

  public readonly crt = { row: 0, pixel: 0 };
  public readonly crtMatrix: Array<Array<'#' | '.'>> = [[]];

  public readonly strengths: Strengths = { ...INITIAL_STRENGTHS };

  public get hasIntersection() {
    return [this.x - 1, this.x, this.x + 1].includes(this.crt.pixel);
  }
}
