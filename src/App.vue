<template>
  <div id="app">
    <h1 class="m-2 p-4">Understanding Mandelbrot</h1>
    <section class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-6">
          <h3>C = {{complexExpression}}</h3>
          <b-form inline>
            <b-form-group
            class="p-2"
            id="c-real"
            label="Real"
            label-for="real-input">
              <b-form-input class="ml-2" number type="number" v-model="real" placeholder="Enter the real component" />

            </b-form-group>
            <b-form-group
            class="p-2"
            id="c-imag"
            label="Imaginary"
            label-for="imag-input">
              <b-form-input class="ml-2" number type="number" v-model="imag" placeholder="Enter the imaginary component" />
            </b-form-group>
             <b-form-group
            class="p-2"
            id="iterations"
            label="# of iterations"
            label-for="iterations-input">
              <b-form-input class="ml-2" number type="number" v-model="numIterations" />
            </b-form-group>

          </b-form>
        </div>
        <div class="w-100"></div>
        <div class="col-6">
          <display-table :values="values"></display-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {complex} from 'mathjs';
import DisplayTable from './components/DisplayTable';
export default {
  name: 'App',
  components: {
    DisplayTable
  },
  data(){
    return {
      real: 0,
      imag: 1,
      numIterations: 20
    }
  },
  computed: {
    values(){
      let x = 0;
      let y = 0;
      const values = [];
      for(let i = 0; i < this.numIterations; i++){
        let oldX = x;
        let oldY = y;
        let squaredX = Math.pow(oldX, 2);
        let squaredY = Math.pow(oldY, 2);
        if(squaredX === Infinity || squaredY === Infinity ){
          values.push(Infinity);
          return values;
        }
        x = squaredX - squaredY + this.real;
        y = 2 * oldX * oldY + this.imag;
        values.push(complex(x,y).toString());
      }
      return values;
    },
    complexExpression(){
      return complex(this.real, this.imag).toString()
  }
}
}
</script>

<style>

</style>
