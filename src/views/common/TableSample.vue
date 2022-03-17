<template>
  <Table :TableData="TableData" />
  <Table :TableData="MemSamData" />
  <div class="field">
    <label for="password">Password</label>
    <Password id="password" class="p-invalid" />
    <button @click="logout">
      logout
    </button>
  </div>
</template>

<script>
import TableData from "../../../tmp/Member.json";
import MemSamData from "../../../tmp/MemSamData.json";
import Table from "@/components/tables/Table.vue";
import { CheckOnLogin } from "@/common/CheckAuth";
export default {
  components: {
    Table,
  },
  setup() {
    const { logout } = CheckOnLogin();
    return {
      TableData,
      MemSamData,
      logout
    };
  },
};
</script>

<style>
</style>