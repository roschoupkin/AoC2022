import { splitPuzzle } from '../../utils/puzzle';
import { BlueprintCosts, BlueprintInfo, BlueprintLimits, ERobots } from './types';

const isCorrectLine = (
  match: number[]
): match is [number, number, number, number, number, number] => match.length === 6;

export function parse(paths: string) {
  const puzzle = splitPuzzle(paths, '\n');

  const blueprints = new Map<number, BlueprintInfo>();

  for (const line of puzzle) {
    if (!line) {
      continue;
    }

    const [id, ...match] = (line.match(/\d+/g) ?? []).map(Number);

    if (id === undefined || !isCorrectLine(match)) {
      throw new Error('Wrong input');
    }

    const costs: BlueprintCosts = new Map([
      [ERobots.Ore, { [ERobots.Ore]: match[0] }],
      [ERobots.Clay, { [ERobots.Ore]: match[1] }],
      [ERobots.Obsidian, { [ERobots.Ore]: match[2], [ERobots.Clay]: match[3] }],
      [ERobots.Geode, { [ERobots.Ore]: match[4], [ERobots.Obsidian]: match[5] }],
    ]);

    const max = (robot: ERobots) =>
      Math.max(...Array.from(costs.values()).map((cost) => cost[robot] ?? 0));

    const limits: BlueprintLimits = new Map([
      [ERobots.Ore, max(ERobots.Ore)],
      [ERobots.Clay, max(ERobots.Clay)],
      [ERobots.Obsidian, max(ERobots.Obsidian)],
      [ERobots.Geode, Infinity],
    ]);

    blueprints.set(id, { costs, limits });
  }

  return blueprints;
}
