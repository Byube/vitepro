import { computed } from 'vue';
import { useStore } from 'vuex';
export const menuOnClick = () => {
    const store = useStore();
    const menuOnClickNow = computed(()=>store.state.menu.menuNm);
    const checkOnMenu = (menuName) => {
        store.dispatch('menu/checkOnMenu', menuName);
    };
    return {
        menuOnClickNow,
        checkOnMenu
    }
}