<template>
  <div class="grid">
    <!-- overflow-x-auto 가로로 값이 길어지면 자동 스크롤바 생성 -->
    <div class="col-12 font-bold overflow-x-auto">
      <div class="card">
        <DataTable
          :value="customer1"
          :paginator="true"
          class="p-datatable-gridlines m-2"
          :rows="10"
          dataKey="id"
          :rowHover="true"
          v-model:filters="filters1"
          filterDisplay="menu"
          :loading="loading1"
          :filters="filters1"
          responsiveLayout="scroll"
          removableSort
        >
          <template #header>
            <div class="flex justify-content-between flex-column sm:flex-row">
              <Button
                type="button"
                icon="pi pi-filter-slash"
                label="Clear"
                class="p-button-outlined mb-2"
                @click="clearFilter1()"
              />
              <span class="p-input-icon-left mb-2">
                <i class="pi pi-search" />
                <InputText
                  v-model="filters1['global'].value"
                  placeholder="Keyword Search"
                  style="width: 100%"
                />
              </span>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>

          <Column
            field="verified"
            header="서비스제한"
            dataType="boolean"
            bodyClass="text-center"
            style="min-width: 5rem; text-align: center"
          >
            <template #body="{ data }">
              <!-- 아래는 o 값  현재는 x값만 표출 -->
              <!-- 'text-green-500 pi-check-circle': data.verified, -->
              <i
                class="pi"
                :class="{
                  'text-pink-500 pi-times-circle': !data.verified,
                }"
              ></i>
            </template>
            <template #filter="{ filterModel }">
              <TriStateCheckbox v-model="filterModel.value" />
            </template>
          </Column>

          <Column
            field="id"
            header="No."
            style="min-width: 10rem"
            bodyClass="text-center"
            :sortable="true"
          >
            <template #body="{ data }">
              <p @click="showMy_dd(data.name)">{{ data.id }}</p>
            </template>
          </Column>

          <Column
            header="가입일"
            filterField="date"
            dataType="date"
            bodyClass="text-center"
            style="min-width: 12rem"
          >
            <template #body="{ data }">
              {{ formatDate(data.date) }}
            </template>
            <template #filter="{ filterModel }">
              <Calendar
                v-model="filterModel.value"
                dateFormat="mm/dd/yy"
                placeholder="mm/dd/yyyy"
              />
            </template>
          </Column>

          <Column
            header="상태"
            field="status"
            dataType="String"
            bodyClass="text-center"
            style="min-width: 10rem"
          >
            <template #body="{ data }">
              {{ data.status }}
            </template>
          </Column>

          <Column
            field="name"
            header="이름"
            bodyClass="text-center"
            style="min-width: 10rem"
            :sortable="true"
          >
            <template #body="{ data }">
              {{ data.name }}
            </template>
          </Column>

          <Column
            field="country"
            header="국가번호"
            style="min-width: 10rem"
          >
            <template #body="{ data }">
              {{ data.country }}
            </template>
          </Column>

          <Column
            field="phoneNm"
            header="연락처"
            style="min-width: 12rem"
          >
            <template #body="{ data }">
              {{ data.phoneNm }}
            </template>
          </Column>

          <Column
            field="Email"
            header="Email / ID"
            style="min-width: 14rem"
          >
            <template #body="{ data }">
              {{ data.Email }}
            </template>
          </Column>

          <!-- <Column
            field="Email1"
            header="Email / ID"
            style="min-width: 14rem"
          >
            <template #body="{ data }">
              {{ data.Email1 }}
            </template>
          </Column>

          <Column
            field="Email2"
            header="Email / ID"
            style="min-width: 14rem"
          >
            <template #body="{ data }">
              {{ data.Email2 }}
            </template>
          </Column>

          <Column
            field="Emai3"
            header="Email / ID"
            style="min-width: 14rem"
          >
            <template #body="{ data }">
              {{ data.Email3 }}
            </template>
          </Column>

          <Column
            field="Email4"
            header="Email / ID"
            style="min-width: 14rem"
          >
            <template #body="{ data }">
              {{ data.Email4 }}
            </template>
          </Column>

          <Column
            field="Email5"
            header="Email / ID"
            style="min-width: 14rem"
          >
            <template #body="{ data }">
              {{ data.Email5 }}
            </template>
          </Column>

          <Column
            field="Email6"
            header="Email / ID"
            style="min-width: 14rem"
          >
            <template #body="{ data }">
              {{ data.Email6 }}
            </template>
          </Column> -->

        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import MemberListService from "@/common/MemberListService";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const customer1 = ref([]);
    const loading1 = ref(true);
    const filters1 = ref(null);
    const mService = new MemberListService();
    onMounted(() => {
      // mService.getm().then((data) => {
      mService.getMemberList().then((data) => {
        customer1.value = data;
        loading1.value = false;
        customer1.value.forEach(
          (customer) => (customer.date = new Date(customer.date))
        );
      });
    });
    const initFilters1 = () => {
      filters1.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        date: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS },
      };
    };
    initFilters1();
    const clearFilter1 = () => {
      initFilters1();
    };

    const formatDate = (value) => {
      return value.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };

    const showMy_dd = (id) => {
      alert(id);
    };

    return {
      customer1,
      loading1,
      filters1,
      clearFilter1,
      formatDate,
      showMy_dd,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/demo/badges.scss";

::v-deep(.p-datatable-frozen-tbody) {
  font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
  font-weight: bold;
}
</style>
