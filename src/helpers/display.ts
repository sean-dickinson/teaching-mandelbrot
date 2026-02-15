import { type Complex, format } from 'mathjs'

export const displayComplex = (value: Complex): string => {
  if (value.re === Infinity || value.im === Infinity) {
    return '∞'
  }
  return format(value, { precision: 5 })

  // return formatted.replace(' 1i', ' i');
}
export const displayNumber = (value: number): string => {
  if (value === Infinity) {
    return '∞'
  }
  return format(value, { precision: 5 })
}
