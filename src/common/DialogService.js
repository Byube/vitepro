import { computed } from 'vue';
import { useStore } from 'vuex';
export const DialogService = () => {
    const store = useStore();
    const message = computed(()=>store.state.dialog.Message);
    const status = computed(()=>store.state.dialog.Confirmation);
    const closeConfirmationYes = () => {
        store.dispatch('dialog/changeConfirmation', false);
    };
    const closeConfirmationNo = () => {
        store.dispatch('dialog/changeConfirmation', false);
    };
    const showDialog = (message) => {
        store.dispatch('dialog/changeConfirmation', true);
        store.dispatch('dialog/changeMessage', message);
    };
    
    return {
        message,
        status,
        closeConfirmationYes,
        closeConfirmationNo,
        showDialog,
    }
}