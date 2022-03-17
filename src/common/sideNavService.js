import { computed } from 'vue';
import { useStore } from 'vuex';
export const activeClassName = () => {
    const store = useStore();
    const overlayMenuActive = computed(() => store.state.sideNav.overlayMenuActive);
    const mobileMenuActive = computed(() => store.state.sideNav.mobileMenuActive);
    const staticMenuInactive = computed(() => store.state.sideNav.staticMenuInactive);
    const layoutMode = computed(() => store.state.sideNav.layoutMode);
    const checkMenuOnclick = computed(() => store.state.sideNav.menuClick);
    const changeMobileMenuState = () => {
        store.dispatch('sideNav/changeMobileMenuState', !mobileMenuActive.value);
    };
    const changeMobileState = (status) => {
        store.dispatch('sideNav/changeMobileMenuState', status);
    };
    const changeOverlayMenuState = () => {
        store.dispatch('sideNav/changeOverlayMenuState', !overlayMenuActive.value);
    };
    const changeOverMenuState = (status) => {
        store.dispatch('sideNav/changeOverlayMenuState', status);
    };
    const changeStaticMenuInactive = () => {
        store.dispatch('sideNav/changeStaticMenuInactive', !staticMenuInactive.value);
    };
    const changeLayoutMode = (message) => {
        store.dispatch('sideNav/changeLayoutMode', message);
    };
    const changeMenuOnclick = (status) => {
        store.dispatch('sideNav/checkMenuOnclick', status);
    };
    return {
        changeMobileMenuState,
        changeStaticMenuInactive,
        changeLayoutMode,
        overlayMenuActive,
        layoutMode,
        mobileMenuActive,
        staticMenuInactive,
        changeOverlayMenuState,
        changeOverMenuState,
        changeMobileState,
        changeMenuOnclick,
        checkMenuOnclick
    }
}