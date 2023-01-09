import { MainDirections } from './types';
import { UnionsToTuple } from 'ts-type-helpers';

export class DirectionsSequence {
  private readonly sequence: UnionsToTuple<MainDirections> = ['N', 'S', 'W', 'E'];

  public get value() {
    return this.sequence;
  }

  public readonly next = () => {
    const first = this.sequence.shift();
    if (first !== undefined) {
      this.sequence.push(first);
    }
  };
}
