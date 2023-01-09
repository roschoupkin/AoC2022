export type Operand = '+' | '-' | '*' | '/';

export interface AboutMonkey {
  left: string;
  right: string;
  operand: Operand;
}
