<script setup lang="ts">
import type { Iteration } from "@/types";
import { displayComplex, displayNumber } from "@/helpers/display";
const props = defineProps<{
  iterations: Iteration[];
}>();

const emit = defineEmits<{
  (e: "add-more-iterations"): void;
}>();
</script>

<template>
  <table>
    <thead>
      <tr>
        <td>Iteration</td>
        <td>Value</td>
        <td>Distance from 0</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(iteration, index) in iterations" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ displayComplex(iteration.value) }}</td>
        <td>{{ displayNumber(iteration.distance) }}</td>
      </tr>
      <tr>
        <td colspan="3">
          <button class="add-iterations" @click="emit('add-more-iterations')">
            Add More Iterations
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  padding: 0.5rem;
  text-align: center;

  & td,
  & th {
    border: 1px solid #ccc;
    padding: 0.5rem;

    &:first-child {
      width: 5ch;
    }
  }

  & thead {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  & tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
}

.add-iterations {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
}
</style>
