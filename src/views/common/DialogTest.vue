<template>
  <div>
    <Button
        label="Delete"
        @click="DeleteDialog"
    />
    <Button
        label="Insert"
        @click="InsertDialog"
    />
    <Button
        label="Update"
        @click="UpdateDialog"
    />
  </div>
  <div>
      <DeleteDialog
        @check-action="onDialogToggle"
      />
  </div>
</template>

<script>
import DeleteDialog from '@/components/dialogs/Dialog.vue';
import { DialogService } from "@/common/DialogService.js";
export default {
    components:{
        DeleteDialog
    },
    setup(){
        const {
            showDialog,
        } = DialogService();
        const DeleteDialog = () => {
            showDialog('Are you sure want to delete it?');
        }
        const InsertDialog = () => {
            showDialog('Are you sure want to Insert it?');
        }
        const UpdateDialog = () => {
            showDialog('Are you sure want to update it?');
        }
        const onDialogToggle = (status) => {
            if(status){
                console.log('mo');
            }
        }
        return{
            DeleteDialog,
            InsertDialog,
            UpdateDialog,
            onDialogToggle
        }
    }
};
</script>

<style>
</style>