<template>
  <!-- BEGIN: Main Color Switcher-->
  <div
    class="fixed bottom-0 right-0 z-50 flex items-center justify-center h-12 px-5 mb-10 border rounded-full shadow-md box mr-52"
  >
    <div class="hidden mr-4 sm:block text-slate-600 dark:text-slate-200">
      Color Scheme
    </div>
    <a
      @click="switchColorScheme('default')"
      class="block w-8 h-8 mr-1 bg-blue-900 border-4 rounded-full cursor-pointer hover:border-slate-200"
      :class="{
        'border-slate-300 dark:border-darkmode-800/80':
          colorScheme == 'default',
        'border-white dark:border-darkmode-600': colorScheme != 'default',
      }"
    ></a>
    <a
      @click="switchColorScheme('theme-1')"
      class="block w-8 h-8 mr-1 border-4 rounded-full cursor-pointer bg-emerald-900 hover:border-slate-200"
      :class="{
        'border-slate-300 dark:border-darkmode-800/80':
          colorScheme == 'theme-1',
        'border-white dark:border-darkmode-600': colorScheme != 'theme-1',
      }"
    ></a>
    <a
      @click="switchColorScheme('theme-2')"
      class="block w-8 h-8 mr-1 bg-blue-800 border-4 rounded-full cursor-pointer hover:border-slate-200"
      :class="{
        'border-slate-300 dark:border-darkmode-800/80':
          colorScheme == 'theme-2',
        'border-white dark:border-darkmode-600': colorScheme != 'theme-2',
      }"
    ></a>
    <a
      @click="switchColorScheme('theme-3')"
      class="block w-8 h-8 mr-1 border-4 rounded-full cursor-pointer bg-cyan-900 hover:border-slate-200"
      :class="{
        'border-slate-300 dark:border-darkmode-800/80':
          colorScheme == 'theme-3',
        'border-white dark:border-darkmode-600': colorScheme != 'theme-3',
      }"
    ></a>
    <a
      @click="switchColorScheme('theme-4')"
      class="block w-8 h-8 bg-indigo-900 border-4 rounded-full cursor-pointer hover:border-slate-200"
      :class="{
        'border-slate-300 dark:border-darkmode-800/80':
          colorScheme == 'theme-4',
        'border-white dark:border-darkmode-600': colorScheme != 'theme-4',
      }"
    ></a>
  </div>
  <!-- END: Main Color Switcher-->
</template>

<script setup>
import { computed } from "vue";
import { useDarkModeStore } from "@/stores/dark-mode";
import { useColorSchemeStore } from "@/stores/color-scheme";
import dom from "@left4code/tw-starter/dist/js/dom";

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);
const colorSchemeStore = useColorSchemeStore();
const colorScheme = computed(() => colorSchemeStore.colorScheme);

const setColorSchemeClass = () => {
  dom("html")
    .attr("class", colorScheme.value)
    .addClass(darkMode.value ? "dark" : "");
};

const switchColorScheme = (colorScheme) => {
  colorSchemeStore.setColorScheme(colorScheme);
  setColorSchemeClass();
};

setColorSchemeClass();
</script>
