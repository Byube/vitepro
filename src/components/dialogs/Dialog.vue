<template>
  <div>
    <Dialog
      header="Confirmation"
      :visible="status"
      :style="{ width: '350px' }"
      :modal="true"
      @click="closeNo"
    >
      <!-- @click="closeNo" -->
      <div class="flex align-items-center justify-content-center">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span>{{ message }}</span>
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          @click="closeNo"
          class="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          @click="closeYes"
          class="p-button-text"
          autofocus
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import { DialogService } from "@/common/DialogService.js";
import { getCurrentInstance } from '@vue/runtime-core';
export default {
  setup() {
    const {emit} = getCurrentInstance();
    const { 
      message, 
      status, 
      closeConfirmationYes, 
      closeConfirmationNo 
      } = DialogService();
    const closeYes = () => {
      closeConfirmationYes();
      emit('check-action',true);
    };
    const closeNo = () => {
      closeConfirmationNo();
      emit('check-action',false);
    };
    return {
      closeYes,
      closeNo,
      status,
      message
    };
  },
};
</script>

<style>
</style>