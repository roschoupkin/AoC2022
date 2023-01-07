export interface Pivot {
  x: number;
  y: number;
}

export type SolutionsVisibility = [one: number, two: number];

export interface Visibility {
  top: SolutionsVisibility;
  bottom: SolutionsVisibility;
  left: SolutionsVisibility;
  right: SolutionsVisibility;
}
