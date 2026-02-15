<script setup lang="ts">
import type { Iteration } from '@/types'
import { displayComplex, displayNumber } from '@/helpers/display'
const props = defineProps<{
  iterations: Iteration[]
}>()
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
      <tr v-for="iteration in iterations" :key="iteration.iteration">
        <td>{{ iteration.iteration }}</td>
        <td>{{ displayComplex(iteration.value) }}</td>
        <td>{{ displayNumber(iteration.distance) }}</td>
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
</style>
