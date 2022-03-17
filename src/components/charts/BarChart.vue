<template>
  <div class="card flex flex-column align-items-center">
    <h5>Bar Chart</h5>
    <Chart type="bar" :data="barData" />
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity';
export default {
  props: {
    BarChartData: {
      type: Object,
    },
  },
  setup(props) {
    const { BarChartData } = toRefs(props);
    const barData = BarChartData;
    return {
      barData,
    };
  },
};
</script>

<style>
</style>