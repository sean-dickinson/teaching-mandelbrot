<template>
  <div id="app">
    <h1 class="m-2 p-4 text-center">Exploring Julia</h1>
    <section class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-6">
          <p>Choose the <em>c</em> value that you would like to iterate in <em>z</em> &#8594; <em>z<sup>2</sup></em> + <em>c</em></p>
          <h3>c = {{ c }}</h3>
          <b-form @submit.stop.prevent inline>
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
                v-model="cReal"
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
                v-model="cImaginary"
                placeholder="Enter the imaginary component"
              />
            </b-form-group>
          </b-form>

          <p class="mt-2">What seed would you like to iterate?</p>

          <h3>seed = {{ seed }}</h3>
          <b-form @submit.stop.prevent inline>
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
                v-model="seedReal"
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
                v-model="seedImaginary"
                placeholder="Enter the imaginary component"
              />
            </b-form-group>
          </b-form>
        </div>
      </div>
      <Iterator :seedReal="seedReal" :seedImaginary="seedImaginary" :cReal="cReal" :cImaginary="cImaginary" />
    </section>
  </div>
</template>

<script>
import { complex } from "mathjs";
import Iterator from "./components/Iterator.vue";
export default {
  name: "App",
  components: {
    Iterator,
  },
  data() {
    return {
      cReal: 0,
      cImaginary: 0,
      seedReal: 0,
      seedImaginary: 0,
    };
  },
  computed: {
    seed() {
      return complex(this.seedReal, this.seedImaginary).toString();
    },
    c(){
      return complex(this.cReal, this.cImaginary).toString();
    }
  },
};
</script>

<style></style>
