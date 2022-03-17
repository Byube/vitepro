<template>
  <h5>Calendar</h5>
  <Calendar
    :showIcon="true"
    :showButtonBar="true"
    v-model="calendarValue"
    dateFormat="yy/mm/dd"
  ></Calendar>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup(){
        const calendarValue = ref(null);
        return{
            calendarValue
        }
    }
};
</script>

<style>
</style>

