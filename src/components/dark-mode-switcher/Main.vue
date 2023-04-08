<template>
  <!-- BEGIN: Dark Mode Switcher-->
  <div
    class="fixed bottom-0 right-0 z-50 flex items-center justify-center w-40 h-12 mb-10 mr-10 border rounded-full shadow-md cursor-pointer dark-mode-switcher box"
    @click="switchMode"
  >
    <div class="mr-4 text-slate-600 dark:text-slate-200">Dark Mode</div>
    <div
      :class="{ 'dark-mode-switcher__toggle--active': darkMode }"
      class="border dark-mode-switcher__toggle"
    ></div>
  </div>
  <!-- END: Dark Mode Switcher-->
</template>

<script setup>
import { computed } from "vue";
import { useDarkModeStore } from "@/stores/dark-mode";
import dom from "@left4code/tw-starter/dist/js/dom";

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);

const setDarkModeClass = () => {
  darkMode.value
    ? dom("html").addClass("dark")
    : dom("html").removeClass("dark");
};

const switchMode = () => {
  darkModeStore.setDarkMode(!darkMode.value);
  setDarkModeClass();
};

setDarkModeClass();
</script>
