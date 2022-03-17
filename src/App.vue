<template>
  <template v-if="isAuthenticated">
    <div :class="containerClass" @click="onWrapperClick">
      <Header />
      <div class="layout-main-container">
        <Main />
        <!-- <router-view /> -->
        <Footer />
      </div>

      <AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" />
      <transition name="layout-mask">
        <div
          class="layout-mask p-component-overlay"
          v-if="mobileMenuActive"
        ></div>
      </transition>
    </div>
  </template>
  <template v-else>
    <div>
      <router-view />
    </div>
  </template>
</template>

<script>
import AppConfig from "@/views/themes/AppConfig.vue";
import Header from "@/views/header/Header.vue";
import Footer from "@/views/footer/Footer.vue";
import Main from "@/views/main/Main.vue";
import { computed, onMounted } from "vue";
import { activeClassName } from "@/common/sideNavService";
import { CheckOnLogin } from "@/common/CheckAuth/";
export default {
  components: {
    AppConfig,
    Header,
    Footer,
    Main,
  },
  setup() {
    const { isAuthenticated, login } = CheckOnLogin();
    onMounted(()=>{
      if(localStorage.getItem('isAuthenticated')){
        // alert('test')
        login();
      }
    })
    const onLayoutChange = (layoutMode) => {
      layoutMode.value = layoutMode;
    };
    const {
      changeMobileState,
      changeOverMenuState,
      layoutMode,
      staticMenuInactive,
      overlayMenuActive,
      mobileMenuActive,
      changeMobileMenuState,
      checkMenuOnclick,
      changeMenuOnclick,
    } = activeClassName();
    const onWrapperClick = () => {
      if (!checkMenuOnclick.value) {
        changeOverMenuState(false);
        changeMobileState(false);
      }
      changeMenuOnclick(false);
    };
    const containerClass = computed(() => {
      return [
        "layout-wrapper",
        {
          "layout-static": layoutMode.value === "static",
          "layout-overlay": layoutMode.value === "overlay",
          "layout-static-sidebar-inactive":
            staticMenuInactive.value && layoutMode.value === "static",
          "layout-overlay-sidebar-active":
            overlayMenuActive.value && layoutMode.value === "overlay",
          "layout-mobile-sidebar-active": mobileMenuActive.value,
          "p-input-filled": false,
          "p-ripple-disabled": false,
          // "layout-theme-light": false,
        },
      ];
    });
    const showMain = () => {
      changeMobileMenuState();
    };
    return {
      onWrapperClick,
      containerClass,
      showMain,
      mobileMenuActive,
      onLayoutChange,
      layoutMode,
      isAuthenticated,
    };
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>

