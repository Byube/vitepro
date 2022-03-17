<template>
  <h1>{{ mName }}</h1>
  <div
    class="
      grid grid-cols-4
      gap-4
      font-mono
      font-bold
      leading-6
      bg-stripes-fuchsia
      rounded-lg
      my-3
      align-items-center
      justify-content-between
    "
  >
    <!-- 블럭내에서 줄바꿈 -->
    <div
      class="flex align-items-center"
      v-for="(item, idx) in cName"
      :key="idx"
    >
      <DataTable
        class="p-datatable-gridlines"
        responsiveLayout="scroll"
        :rowHover="true"
      >
        <Column field="col" :header="item" style="min-width: 10rem"></Column>
        <Column field="name" header="총 72명" style="min-width: 10rem">
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mName: {
      type: String,
      required: true,
    },
    cName: {
      type: Array,
    },
  },
  setup() {
    
  },
};
</script>

<style>
</style>