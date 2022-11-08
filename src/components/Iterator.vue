<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <b-form inline>
        <b-form-group
            class="p-2"
            id="iterations"
            label="# of iterations"
            label-for="iterations-input">
              <b-form-input class="ml-2" number type="number" v-model="numIterations" />
        </b-form-group>
      </b-form>
      <display-table :values="values"></display-table>
    </div>
  </div>
</template>

<script>
import DisplayTable from "./DisplayTable";
import { complex } from "mathjs";
export default {
  components: {
    DisplayTable,
  },
  props: {
    cReal: {
      type: Number,
      default: 0,
    },
    cImaginary:{
      type: Number,
      default: 0,
    },
    seedReal: {
      type: Number,
      default: 0,
    },
    seedImaginary:{
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      real: 0,
      imag: 1,
      numIterations: 20,
    };
  },
  computed: {
    values() {
      let x = this.seedReal;
      let y = this.seedImaginary;
      const values = [];
      for (let i = 0; i < this.numIterations; i++) {
        let oldX = x;
        let oldY = y;
        let squaredX = Math.pow(oldX, 2);
        let squaredY = Math.pow(oldY, 2);
        if (squaredX === Infinity || squaredY === Infinity) {
          values.push(Infinity);
          return values;
        }
        x = squaredX - squaredY + this.cReal;
        y = 2 * oldX * oldY + this.cImaginary;
        values.push(complex(x, y).toString());
      }
      return values;
    },
  },
};
</script>
