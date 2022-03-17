<template>
  <div class="card flex flex-column align-items-center">
    <h5>Linear Chart</h5>
    <Chart type="line" :data="lineData" />
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity';

export default {
    props:{
        LineChartData:{
            type:Object,
            required:true
        }
    },
    setup(props){
        const {LineChartData} = toRefs(props);
        const lineData = LineChartData;
        return{
            lineData
        }
    }
};
</script>

<style>
</style>