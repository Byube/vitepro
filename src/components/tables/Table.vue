<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <DataTable
          :value="cars.data"
          :paginator="true"
          :rows="5"
          :rowHover="true"
        >
          <Column
            v-for="col of columns"
            :field="col.field"
            :header="col.header"
            :key="col.field"
          ></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity';
export default {
  props: {
    TableData: {
      type: Object,
      required:true
    },
  },
  setup(props) {
    let {TableData} = toRefs(props);
    const cars = TableData.value;
    let columns = [];
    const keys = Object.keys(cars.data[0]);
    for (let i = 0; i < keys.length; i++) {
      columns.push({
        field: keys[i],
        header: keys[i].charAt(0).toUpperCase() + keys[i].slice(1),
      });
    }
    return {
      cars,
      columns,
    };
  },
};
</script>

<style>
</style>
