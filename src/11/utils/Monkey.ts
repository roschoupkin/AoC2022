import { PARSE_PARTS } from './consts';
import { isOperation } from './guards';

export class Monkey {
  public inspections = 0;
  private _items: number[];

  public readonly id: number;

  public readonly divider: number;
  public readonly positive: number;
  public readonly negative: number;

  public readonly mod: (x: number) => number;
  public readonly operation: (x: number) => number;

  public get items() {
    return this._items;
  }

  constructor(input: string) {
    const [, id] = (input.match(PARSE_PARTS.id) ?? []).map(Number);
    if (id !== undefined && Number.isFinite(id)) {
      this.id = id;
    } else {
      throw new Error('Wrong input');
    }

    const [, divider] = (input.match(PARSE_PARTS.mod) ?? []).map(Number);
    if (divider !== undefined && Number.isFinite(divider)) {
      this.divider = divider;
      this.mod = (x: number) => x % this.divider;
    } else {
      throw new Error('Wrong input');
    }

    const [, operation, figure] = input.match(PARSE_PARTS.operation) ?? [];
    if (isOperation(operation) && figure !== undefined) {
      const value = (x: number) => (figure === 'old' ? x : Number(figure));
      this.operation = {
        '*': (x: number) => x * value(x),
        '+': (x: number) => x + value(x),
      }[operation];
    } else {
      throw new Error('Wrong input');
    }

    const [, itemsStr = ''] = input.match(PARSE_PARTS.items) ?? [];
    const items = itemsStr.split(',').map(Number);
    if (items.every((item) => Number.isFinite(item))) {
      this._items = items;
    } else {
      throw new Error('Wrong input');
    }

    const [, positiveStr] = input.match(PARSE_PARTS.positive) ?? [];
    const positive = Number(positiveStr);
    if (Number.isFinite(positive)) {
      this.positive = positive;
    } else {
      throw new Error('Wrong input');
    }

    const [, negativeStr] = input.match(PARSE_PARTS.negative) ?? [];
    const negative = Number(negativeStr);
    if (Number.isFinite(negative)) {
      this.negative = negative;
    } else {
      throw new Error('Wrong input');
    }
  }

  public readonly addItem = (x: number) => {
    this._items.push(x);
  };

  public readonly clearItems = () => {
    this._items = [];
  };
}
