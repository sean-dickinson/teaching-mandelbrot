<template>
<div class="display-table py-3">
  <b-table striped outlined :items="dataItems"></b-table>
</div>
</template>

<script>
export default {
  name: 'DisplayTable',
  props: {
    values: Array
  },
  computed: {
    dataItems(){
      return this.values.map((val, i) => ({
        iteration: i + 1,
        value: val
      }))
    }
  }
}
</script>

