<template>
  <div class="card flex flex-column align-items-center">
    <h5>Pie Chart</h5>
    <Chart type="pie" :data="pieData" style="width: 50%" />
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity';
export default {
    props:{
        PieChartData:{
            type:Object
        }
    },
    setup(props){
        const {PieChartData} = toRefs(props);
        const pieData = PieChartData;
        return{
            pieData
        }
    }
};
</script>

<style>
</style>