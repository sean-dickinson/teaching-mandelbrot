import type { Complex } from "mathjs";

export interface Iteration {
  iteration: number;
  value: Complex;
  distance: number;
}
