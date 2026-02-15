import { pow, add, type Complex } from "mathjs";
export const iterate = (z: Complex, c: Complex): Complex => {
  return add(pow(z, 2), c) as Complex;
};
