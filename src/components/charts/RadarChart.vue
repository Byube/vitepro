<template>
  <div class="card flex flex-column align-items-center">
    <h5>Radar Chart</h5>
    <Chart type="radar" :data="radarData" style="width: 50%" />
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
export default {
  props: {
    RadarChartData: {
      type: Object,
    },
  },
  setup(props) {
    const { RadarChartData } = toRefs(props);
    const radarData = RadarChartData;
    return {
      radarData,
    };
  },
};
</script>

<style>
</style>