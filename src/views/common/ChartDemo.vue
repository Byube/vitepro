<template>
  <div
    class="
      grid 
      grid-cols-2
      gap-2
      font-bold
    "
  >
    <div calss="col-12">
      <LineChart
        :LineChartData="LineChartData"
      />
      <PieChart
        :PieChartData="PieChartData"
      />
      <PolarAreaChart 
        :PolarAreaChartData="PolarAreaChartData"
      />

    </div>
    <div calss="col-12 lg:col-6">
      <BarChart
        :BarChartData="BarChartData"
      />
      <DoughNutChart
        :DoughNutChartData="DoughNutChartData"
      />
      <RadarChart
        :RadarChartData="RadarChartData"
      />
    </div>
  </div>
</template>

<script>
import PieChart from '@/components/charts/PieChart.vue';
import LineChart from '@/components/charts/LineChart.vue';
import PolarAreaChart from '@/components/charts/PolarAreaChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import DoughNutChart from '@/components/charts/DoughNutChart.vue';
import RadarChart from '@/components/charts/RadarChart.vue';
import PieChartData from '../../../tmp/PieChartData.json'
import LineChartData from '../../../tmp/LineChartData.json'
import PolarAreaChartData from '../../../tmp/PolarAreaChartData.json'
import BarChartData from '../../../tmp/BarChartData.json'
import DoughNutChartData from '../../../tmp/DoughNutChartData.json'
import RadarChartData from '../../../tmp/RadarChartData.json'
// import axios from '@/api/axios';
// import { ref } from '@vue/reactivity';
export default {
  components:{
    PieChart,
    LineChart,
    PolarAreaChart,
    BarChart,
    DoughNutChart,
    RadarChart
  },
  setup() {
    // const PieChartData = ref(null);
    // const GetData = async () => {
    //   let res;
    //   try {
    //     res = await axios.get('comments/1');
    //     PieChartData.value = res.data;
    //     console.log(PieChartData.value);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // GetData();
    // console.log(DoughNutChartData);
    return {
      PieChartData,
      LineChartData,
      PolarAreaChartData,
      BarChartData,
      DoughNutChartData,
      RadarChartData,
    }
  }
};
</script>