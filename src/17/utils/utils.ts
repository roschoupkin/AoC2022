export function* iterator<TValue, TIterable extends TValue[]>(
  iterable: TIterable
): Generator<TValue> {
  let index = 0;

  while (true) {
    if (index === iterable.length) {
      index = 0;
    }

    const value = iterable[index];

    if (value === undefined) {
      throw new Error('Wrong iteration');
    }

    yield value;

    index++;
  }
}
