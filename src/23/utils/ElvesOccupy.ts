export class ElvesOccupy {
  private readonly occupyMap = new Map<number, Set<number>>();

  public get xDistance() {
    return this.xMax - this.xMin + 1;
  }

  public get yDistance() {
    return this.yMax - this.yMin + 1;
  }

  private get yMax() {
    return Math.max(...this.occupyMap.keys());
  }

  private get yMin() {
    return Math.min(...this.occupyMap.keys());
  }

  private get xMax() {
    let xMax = -Infinity;
    for (const xSet of this.occupyMap.values()) {
      xMax = Math.max(xMax, ...xSet);
    }
    return xMax;
  }

  private get xMin() {
    let xMax = Infinity;
    for (const xSet of this.occupyMap.values()) {
      xMax = Math.min(xMax, ...xSet);
    }
    return xMax;
  }

  constructor(base: string[]) {
    for (let y = 0; y < base.length; y++) {
      const line = base[y]?.split('');
      if (line?.length) {
        for (let x = 0; x < line.length; x++) {
          if (line[x] === '#') {
            this.set(x, y);
          }
        }
      }
    }
  }

  public readonly clear = () => this.occupyMap.clear();

  public readonly has = (x: number, y: number) => !!this.occupyMap.get(y)?.has(x);

  public readonly set = (x: number, y: number) => {
    if (this.occupyMap.has(y)) {
      this.occupyMap.get(y)?.add(x);
    } else {
      this.occupyMap.set(y, new Set([x]));
    }
  };
}
