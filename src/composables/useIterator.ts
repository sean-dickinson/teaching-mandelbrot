import type { Iteration } from "@/types";
import { type MaybeRefOrGetter, toValue, computed } from "vue";
import { iterate } from "@/helpers/iterate";
import { findDistanceFromZero } from "@/helpers/distance";
import type { Complex } from "mathjs";

const NUM_ITERATIONS = 20;

export function useIterator(z: MaybeRefOrGetter<Complex>, c: MaybeRefOrGetter<Complex>) {
  return computed(() => {
    const results: Iteration[] = [];
    let previous = toValue(z);
    let value;
    for (let i = 0; i < NUM_ITERATIONS; i++) {
      value = iterate(previous, toValue(c));
      results.push({ value: value, distance: findDistanceFromZero(value) });
      previous = value;
    }
    return results;
  });
}
