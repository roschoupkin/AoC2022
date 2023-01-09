import { BlueprintInfo, ContextStack, ERobots, Resources, Robots } from './types';
import { clone, safeOwnKeys } from './utils';
import { INITIAL_RESOURCES, INITIAL_ROBOTS } from './consts';

export class Context {
  public get largest() {
    const bestInTime: Record<number, number> = {};

    const stack: ContextStack[] = [
      {
        spentTime: 0,
        robots: clone(INITIAL_ROBOTS),
        resources: clone(INITIAL_RESOURCES),
        skipped: new Set(),
      },
    ];

    while (stack.length) {
      const item = stack.pop();
      if (!item) {
        break;
      }

      const { spentTime, robots, resources, skipped } = item;

      bestInTime[spentTime] = Math.max(resources[ERobots.Geode], bestInTime[spentTime] ?? 0);

      if (this.maxTime >= spentTime && bestInTime[spentTime] === resources[ERobots.Geode]) {
        const options = this.calcBuildOptions(resources);
        for (const robot of options) {
          const increasedResources = this.incResources(robots, resources);
          if (robot === 0) {
            stack.push({
              robots,
              skipped: options,
              spentTime: spentTime + 1,
              resources: increasedResources,
            });
          } else if (
            !skipped.has(robot) &&
            (this.blueprint.limits.get(robot) ?? -1) >= robots[robot] + 1
          ) {
            const [next_robots, next_resources] = this.buildRobot(
              robot,
              robots,
              increasedResources
            );
            stack.unshift({
              robots: next_robots,
              skipped: new Set(),
              spentTime: spentTime + 1,
              resources: next_resources,
            });
          }
        }
      }
    }

    return bestInTime[this.maxTime] ?? -1;
  }

  constructor(private readonly blueprint: BlueprintInfo, private readonly maxTime: number) {}

  private readonly calcBuildOptions = (resources: Record<ERobots, number>) => {
    const options = new Set<ERobots | 0>([0]);
    for (const [robot, costs] of this.blueprint.costs.entries()) {
      if (
        safeOwnKeys(costs).every((robot) => {
          const robotCost = costs[robot];
          return robotCost !== undefined && resources[robot] >= robotCost;
        })
      ) {
        options.add(robot);
      }
    }

    if (options.has(ERobots.Geode)) {
      options.clear();
      options.add(ERobots.Geode);
    }

    return options;
  };

  private readonly buildRobot = (robot: ERobots, robots: Robots, resources: Resources) => {
    const costs = this.blueprint.costs.get(robot) ?? {};

    const robotsClone = clone(robots);
    robotsClone[robot] += 1;

    const resourcesClone = clone(resources);
    for (const key of safeOwnKeys(costs)) {
      const cost = costs[key];
      if (cost !== undefined) {
        resourcesClone[key] -= cost;
      }
    }

    return [robotsClone, resourcesClone] as const;
  };

  private readonly incResources = (robots: Robots, resources: Resources) => {
    const resourcesClone = clone(resources);
    for (const robot of safeOwnKeys(robots)) {
      resourcesClone[robot] += robots[robot];
    }
    return resourcesClone;
  };
}
