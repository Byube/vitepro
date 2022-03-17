<template>
  <div class="card flex flex-column align-items-center">
    <h5>Doughnut Chart</h5>
    <Chart type="doughnut" :data="doughnutData" style="width: 50%" />
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
export default {
  props: {
    DoughNutChartData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { DoughNutChartData } = toRefs(props);
    const doughnutData = DoughNutChartData;
    return {
      doughnutData,
    };
  },
};
</script>

<style>
</style>