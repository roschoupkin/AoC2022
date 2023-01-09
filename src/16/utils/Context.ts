export class Context {
  private readonly memoization = new Map<string, number>();

  constructor(
    private readonly movesMap: Map<string, Set<string>>,
    private readonly ratesMap: Map<string, number>
  ) {}

  public readonly best = (current: string, time: number, list: string[]): number => {
    let value = 0;

    for (const valve of list) {
      const left = time - this.distance(current, valve) - 1;
      if (left <= 0) {
        continue;
      }

      const unsettled = list.filter((v) => v !== valve);
      const best = this.best(valve, left, unsettled);
      const score = left * (this.ratesMap.get(valve) ?? 0) + best;

      if (score > value) {
        value = score;
      }
    }

    return value;
  };

  private readonly distance = (initial: string, destination: string) => {
    const key = `${initial}-${destination}`;
    const memo = this.memoization.get(key);

    if (memo !== undefined) {
      return memo;
    }

    const routes = [initial];

    const costOfMove = new Map<string, number>([[initial, 0]]);
    const cameFrom = new Map<string, string | null>([[initial, null]]);

    while (routes.length) {
      const route = routes.shift();

      if (!route || route === destination) {
        break;
      }

      const routeCost = costOfMove.get(route);
      const moves = this.movesMap.get(route);

      if (!moves || routeCost === undefined) {
        continue;
      }

      for (const move of [...moves]) {
        const cost = routeCost + 1;
        const moveCost = costOfMove.get(move);
        if (!moveCost || cost < moveCost) {
          routes.push(move);
          cameFrom.set(move, route);
          costOfMove.set(move, cost);
        }
      }
    }

    const destinationCost = costOfMove.get(destination);

    if (destinationCost) {
      this.memoization.set(key, destinationCost);
      return destinationCost;
    }

    return -1;
  };
}
