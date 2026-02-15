<script setup lang="ts">
import ComplexInput from "@/components/ComplexInput.vue";
import DisplayTable from "@/components/DisplayTable.vue";
import { ref, watch } from "vue";
import { useIterator } from "./composables/useIterator";
import { add, complex, type Complex } from "mathjs";
import { displayComplex } from "./helpers/display";
import type { Iteration } from "./types";

const z = ref(complex(0, 0));
const c = ref(complex(0, 1));
const iterations = ref<Iteration[]>([]);

const addMoreIterations = () => {
  const lastIteration = iterations.value.at(-1)?.value ?? complex(0, 0);
  iterations.value = [...iterations.value, ...useIterator(lastIteration, c).value];
};

watch(
  () => c.value.toString(),
  () => {
    iterations.value = [];
    addMoreIterations();
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <main>
    <header>
      <h1>Understanding Mandelbrot</h1>
      <h2>C = {{ displayComplex(c) }}</h2>
      <div class="form-group">
        <complex-input v-model="c" />
      </div>
    </header>
    <section>
      <display-table :iterations="iterations" @add-more-iterations="addMoreIterations" />
    </section>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & label {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
}
</style>
