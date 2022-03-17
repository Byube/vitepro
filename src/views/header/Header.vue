<template>
    <AppTopbar @menu-toggle="onMenuToggle" />
    <div class="layout-sidebar" @click="onSidebarClick">
        <SideNav :model="menu" @menuitem-click="onMenuItemClick" />
    </div>
</template>
<script>
import SideNav from "@/views/header/sideNav/SideNav.vue";
import AppTopbar from "@/views/header/sideNav/AppTopbar.vue";
import SideNavData from "../../../tmp/SideNavData.json";
// import SideDB from "@/api/sideNavDB.js";
// import sideTest from "@/api/sideTest.js";
import { activeClassName } from "@/common/sideNavService";
import { menuOnClick } from "@/common/menuCheckService";
import { ref } from "@vue/reactivity";
export default {
  components: {
    SideNav,
    AppTopbar,
  },
  setup() {
    const {
      containerClass,
      changeMobileMenuState,
      changeStaticMenuInactive,
      layoutMode,
      mobileMenuActive,
      changeOverlayMenuState,
      changeOverMenuState,
      changeMobileState,
      changeMenuOnclick,
    } = activeClassName();

    const { checkOnMenu } = menuOnClick();

    const onMenuToggle = (event) => {
      changeMenuOnclick(true);
      if (window.innerWidth >= 992) {
        if (layoutMode.value === "overlay") {
          if (mobileMenuActive.value === true) {
            changeOverMenuState(true);
          }
          changeOverlayMenuState();
          changeMobileState(false);
        } else if (layoutMode.value === "static") {
          changeStaticMenuInactive();
        }
      } else {
        changeMobileMenuState();
      }
      event.preventDefault();
    };
    const onSidebarClick = () => {
      changeMenuOnclick(true);
    };

    const onMenuItemClick = (event) => {
      if (event.item && !event.item.items) {
        checkOnMenu(event.item.label);
        changeOverMenuState(false);
        changeMobileState(false);
      }
    };
    const SideN = ref([]);
    const SideNavonDB = async () => {
      // let res;
      // let test;
      //비동기 처리 끝나는 지점 체크 await
      try {
        // SideN.value = res.data;

        // const response = await fetch("http://localhost:8090/getMenuPath");
        // const data = await response.json();
        // console.log(data);

        // const headers = {
        //   "Connection": "keep-alive",
        //   "Accept-Encoding":"gzip, deflate, br",
        //   "Accept":"*/*",
        //   "Host":"<calculated when request is sent>"
        // };
        let test = await fetch("http://localhost:8090/getMenuList");
        const res = await test.json();
        for (let i = 0; i < res.length; i++) {
          console.log(res[i].items.length);
            for (let j = 0; j < res[i].items.length; j++) {
        
              if(res[i].items[j].items.length === 0){
                delete res[i].items[j].items;
              }
              
            }
          
        }
        SideN.value = res;
        console.log(SideN.value);

        // test = await sideTest.get('getMenuPath');
        // let tests = await fetch("http://localhost:8090/getMenuPath");
        // const ress = await tests.json();
        // console.log(ress[0].menuComponent);

        // for(const {menuName, menuComponent, menupath} of test.data){
        //   console.log(`path: ${menupath}`)
        //   console.log(`name: ${menuName}`)
        //   console.log(`../views/common/${menuComponent}.vue`);
        // }
        // setMenuPath(test);
      } catch (error) {
        console.log("err");
        console.log(error);
      }
      // res = await SideDB.get('/');
      // console.log(res);
      // SideN.value = res.data;
    };
    SideNavonDB();

    return {
      onMenuItemClick,
      // menu: SideNavData.menu,
      menu: SideN,
      containerClass,
      onMenuToggle,
      onSidebarClick,
    };
  },
};
</script>

<style lang="scss">
@import '@/App.scss';
</style>
