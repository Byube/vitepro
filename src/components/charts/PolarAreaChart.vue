<template>
  <div class="card flex flex-column align-items-center">
    <h5>Polar Area Chart</h5>
    <Chart type="polarArea" :data="polarData" style="width: 50%" />
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
export default {
  props: {
    PolarAreaChartData: {
      type: Object,
    },
  },
  setup(props) {
    const { PolarAreaChartData } = toRefs(props);
    const polarData = PolarAreaChartData;
    return {
      polarData,
    };
  },
};
</script>

<style>
</style>