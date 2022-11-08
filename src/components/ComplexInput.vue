<template>
  <b-form-group
          class="p-2"
          id="c-real"
          label="Real"
          label-for="real-input"
        >
          <b-form-input
            class="ml-2"
            number
            type="number"
            v-model="real"
            placeholder="Enter the real component"
          />
        </b-form-group>
        <b-form-group
          class="p-2"
          id="c-imag"
          label="Imaginary"
          label-for="imag-input"
        >
          <b-form-input
            class="ml-2"
            number
            type="number"
            v-model="imaginary"
            placeholder="Enter the imaginary component"
          />
        </b-form-group>
</template>

<script>
export default {
  data() {
      return {
        real: 0,
        imag: 0,
      };
    },

}
</script>