import { computed } from 'vue';
import { useStore } from 'vuex';

export const sideMenuPath = () => {
    const store = useStore();
    const menuPath = computed(()=>store.state.menuPath.pathObject);
    const setMenuPath = (menuList) => {
        store.dispatch('menuPath/setMenuPath', menuList);
    };
    return{
        menuPath,
        setMenuPath
    }
}