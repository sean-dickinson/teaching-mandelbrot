<script setup lang="ts">
import { complex, type Complex } from 'mathjs'
const model = defineModel<Complex>({
  required: true,
  default: () => complex(0, 0),
  set: (value: Complex) => complex(value.re, value.im),
})
</script>

<template>
  <label for="real"
    >Real Component
    <input id="real" type="number" v-model.number="model.re" class="form-control" />
  </label>

  <label for="imaginary"
    >Imaginary Component
    <input id="imaginary" type="number" v-model.number="model.im" class="form-control" />
  </label>
</template>
