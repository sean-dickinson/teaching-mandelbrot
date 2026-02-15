import type { Complex } from 'mathjs'

export const findDistanceFromZero = (value: Complex): number =>
  Math.sqrt(value.re * value.re + value.im * value.im)
