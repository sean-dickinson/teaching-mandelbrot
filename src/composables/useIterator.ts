import type { Iteration } from '@/types'
import { type MaybeRefOrGetter, toValue, computed } from 'vue'
import { iterate } from '@/helpers/iterate'
import { findDistanceFromZero } from '@/helpers/distance'
import type { Complex } from 'mathjs'

export function useIterator(
  z: MaybeRefOrGetter<Complex>,
  c: MaybeRefOrGetter<Complex>,
  numIterations: MaybeRefOrGetter<number>,
) {
  return computed(() => {
    const results: Iteration[] = []
    let previous = toValue(z)
    let value
    for (let i = 0; i < toValue(numIterations); i++) {
      value = iterate(previous, toValue(c))
      results.push({ iteration: i + 1, value: value, distance: findDistanceFromZero(value) })
      previous = value
    }
    return results
  })
}
