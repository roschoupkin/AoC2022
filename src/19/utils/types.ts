export enum ERobots {
  Ore = 1,
  Clay = 2,
  Obsidian = 3,
  Geode = 4,
}

export type BlueprintLimits = Map<ERobots, number>;
export type BlueprintCosts = Map<ERobots, Partial<Record<ERobots, number>>>;

export interface BlueprintInfo {
  costs: BlueprintCosts;
  limits: BlueprintLimits;
}

export type Robots = Record<ERobots, number>;
export type Resources = Record<ERobots, number>;

export interface ContextStack {
  spentTime: number;
  robots: Robots;
  resources: Resources;
  skipped: Set<number>;
}
