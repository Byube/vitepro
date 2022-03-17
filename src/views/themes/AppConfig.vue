<template>
  <div id="layout-config" :class="containerClass">
    <a
      href="#"
      class="layout-config-button"
      id="layout-config-button"
      @click="toggleConfigurator"
    >
      <i class="pi pi-cog"></i>
    </a>
    <Button
      class="p-button-danger layout-config-close p-button-rounded p-button-text"
      icon="pi pi-times"
      @click="hideConfigurator"
      :style="{ 'z-index': 1 }"
    ></Button>

    <div class="layout-config-content">
      <p class="text-2xl mt-0">Component Scale</p>
      <div class="config-scale">
        <Button
          icon="pi pi-minus"
          @click="decrementScale()"
          class="p-button-text"
          :disabled="scale === scales[0]"
        />
        <i
          class="pi pi-circle-on"
          v-for="s of scales"
          :class="{ 'scale-active': s === scale }"
          :key="s"
        />
        <Button
          icon="pi pi-plus"
          @click="incrementScale()"
          class="p-button-text"
          :disabled="scale === scales[scales.length - 1]"
        />
      </div>

      <p class="text-3xl">Themes</p>

      <p class="text-lg m-2">Material Design Compact</p>
      <div class="grid free-themes grid-cols-2">
        <div class="m-5">
          <button
            class="p-link"
            type="button"
            @click="changeTheme($event, 'mdc-light-indigo')"
          >
            <img
              class="block"
              src="@/assets/images/themes/md-light-indigo.svg"
              alt="Material Compact Light Indigo"
              @click="changeTheme($event, 'mdc-light-indigo')"
            />
			<p>Light</p>
          </button>
        </div>
        <div class="m-5">
          <button
            class="p-link"
            type="button"
            @click="changeTheme($event, 'md-dark-indigo', true)"
          >
            <img
              class="block"
              src="@/assets/images/themes/md-dark-indigo.svg"
              alt="Material Dark Indigo"
              @click="changeTheme($event, 'md-dark-indigo', true)"
            />
			<p>Dark</p>
          </button>
        </div>
      </div>
<!-- 	  
      <h6>PrimeOne Design - 2022</h6>
      <div class="grid free-themes grid-cols-4">
        <div class="mt-5">
          <button
            class="p-link"
            type="button"
            @click="changeTheme($event, 'lara-light-blue')"
          >
            <img
              class="block"
              src="images/themes/lara-light-blue.png"
              alt="Lara Light Blue"
            />
          </button>
        </div>
        <div class="mt-5">
          <button
            class="p-link"
            type="button"
            @click="changeTheme($event, 'lara-light-teal')"
          >
            <img
              class="block"
              src="images/themes/lara-light-teal.png"
              alt="Lara Light Teal"
            />
          </button>
        </div>
        <div class="mt-5">
          <button
            class="p-link"
            type="button"
            @click="changeTheme($event, 'lara-dark-blue', true)"
          >
            <img
              class="block"
              src="images/themes/lara-dark-blue.png"
              alt="Lara Dark Blue"
            />
          </button>
        </div>
        <div class="mt-5">
          <button
            class="p-link"
            type="button"
            @click="changeTheme($event, 'lara-dark-teal', true)"
          >
            <img
              class="block"
              src="images/themes/lara-dark-teal.png"
              alt="Lara Dark Teal"
            />
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "@vue/runtime-core";
export default {
  props: {
    layoutMode: {
      type: String,
      default: null,
    },
  },
  setup() {
    const { emit } = getCurrentInstance();
    const changeLayout = (event, layoutMode) => {
      emit("layout-change", layoutMode);
      event.preventDefault();
    };
    return {
      changeLayout,
    };
  },
  data() {
    return {
      active: false,
      scale: 14,
      scales: [12, 13, 14, 15, 16],
    };
  },
  watch: {
    $route() {
      if (this.active) {
        this.active = false;
        this.unbindOutsideClickListener();
      }
    },
  },
  outsideClickListener: null,
  methods: {
    toggleConfigurator(event) {
      this.active = !this.active;
      event.preventDefault();

      if (this.active) this.bindOutsideClickListener();
      else this.unbindOutsideClickListener();
    },
    hideConfigurator(event) {
      this.active = false;
      this.unbindOutsideClickListener();
      event.preventDefault();
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event) => {
          if (this.active && this.isOutsideClicked(event)) {
            this.active = false;
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    isOutsideClicked(event) {
      return !(
        this.$el.isSameNode(event.target) || this.$el.contains(event.target)
      );
    },
    decrementScale() {
      this.scale--;
      this.applyScale();
    },
    incrementScale() {
      this.scale++;
      this.applyScale();
    },
    applyScale() {
      document.documentElement.style.fontSize = this.scale + "px";
    },
    changeTheme(event, theme, dark) {
      let themeElement = document.getElementById("theme-link");
      themeElement.setAttribute(
        "href",
        themeElement.getAttribute("href").replace(this.$appState.theme, theme)
      );
      this.$appState.theme = theme;
      this.$appState.darkTheme = dark;

      if (theme.startsWith("md")) {
        this.$primevue.config.ripple = true;
      }
    },
  },
  computed: {
    containerClass() {
      return ["layout-config", { "layout-config-active": this.active }];
    },
  },
};
</script>
