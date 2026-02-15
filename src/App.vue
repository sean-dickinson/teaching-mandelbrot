<script setup lang="ts">
import ComplexInput from '@/components/ComplexInput.vue'
import DisplayTable from '@/components/DisplayTable.vue'
import { ref } from 'vue'
import { useIterator } from './composables/useIterator'
import { complex } from 'mathjs'
import { displayComplex } from './helpers/display'

const z = ref(complex(0, 0))
const c = ref(complex(0, 1))
const numIterations = ref(20)
const iterations = useIterator(z, c, numIterations)
</script>

<template>
  <main>
    <header>
      <h1>Understanding Mandelbrot</h1>
      <h2>C = {{ displayComplex(c) }}</h2>
      <div class="form-group">
        <complex-input v-model="c" />
        <label for="iterations"
          >Number of Iterations
          <input
            id="iterations"
            type="number"
            v-model.number="numIterations"
            class="form-control"
          />
        </label>
      </div>
    </header>
    <section>
      <display-table :iterations="iterations" />
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
