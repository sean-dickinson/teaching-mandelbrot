<script setup lang="ts">
import { complex, type Complex } from "mathjs";
const model = defineModel<Complex>({
  required: true,
  default: () => complex(0, 0),
});

const coalesceToZero = (value: unknown) => {
  return Number(value || 0);
};

const handleRealInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  model.value.re = coalesceToZero(value);
};

const handleImaginaryInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  model.value.im = coalesceToZero(value);
};
</script>

<template>
  <label for="real"
    >Real Component
    <input
      id="real"
      type="number"
      :value="model.re"
      @input="handleRealInput"
      class="form-control"
    />
  </label>

  <label for="imaginary"
    >Imaginary Component
    <input
      id="imaginary"
      type="number"
      :value="model.im"
      @input="handleImaginaryInput"
      class="form-control"
    />
  </label>
</template>
