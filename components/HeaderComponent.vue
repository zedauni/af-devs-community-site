<template>
  <!-- Navbar -->
  <header
    class="fixed w-full mx-auto bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-50/10 backdrop-blur-md z-50 transition-colors duration-300"
  >
    <nav class="md:w-9/12 mx-auto px-4 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold"
        >AF-<span class="text-primary">DEV</span></a
      >
      <div class="md:hidden">
        <Icon
          id="menu-toggle"
          :name="sideNavIsVisible ? 'ri:close-large-fill' : 'ri:menu-line'"
          @click="handleSideMenuClick"
          class="cursor-pointer"
        />
      </div>
      <ul
        id="menu-side-navbar"
        class="md:flex space-x-6"
        :class="{hidden: !sideNavIsVisible}"
        v-on-click-outside="handleSideMenuClick"
      >
        <li class="_bg-gray-50/5 py-3">
          <a href="#" class="transition-colors underline-effect px-5">Accueil</a>
        </li>
        <li class="py-3">
          <a href="#activities" class="transition-colors underline-hover-effect px-5"
            >Nos Activités</a
          >
        </li>
        <li class="py-3">
          <a href="#blog" class="transition-colors underline-hover-effect px-5">Blog</a>
        </li>
        <li class="py-3">
          <a href="#community" class="transition-colors underline-hover-effect px-5"
            >Rejoindre</a
          >
        </li>
        <li class="py-3">
          <a href="#contact" class="transition-colors underline-hover-effect px-5"
            >Contact</a
          >
        </li>
        <li class="flex items-center cursor-pointer">
          <Icon
            id="theme-mode"
            :name="colorModeIcon"
            @click.prevent="handleThemeModeClick"
            class="text-gray-700 fill-gray-700 dark:text-gray-200 dark:fill-gray-200 rounded-full"
            :class="colorModeIconColor"
            :title="colorModeTitle"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components";

const sideNavIsVisible = shallowRef(false);

const { handleClick: handleSideMenuClick } = useThrottledHandler(
  () => {sideNavIsVisible.value = !sideNavIsVisible.value},
  50
);

// SORRY
// I am lazy. So i am not going to manage the dark mode in this Header component.
// We will move it later to a better place

// TODO Make use of [VueUse useDark](https://vueuse.org/core/useDark). So colorMode dependency can be removed

const { colorMode, toggleDarkMode, forceSystemMode } = useDarkMode();

const { handleClick: handleThemeModeClick } = useClickHandler(
  toggleDarkMode,
  forceSystemMode
);

const colorModeTitle = computed(() => {
  return (
    "Activer le Mode " +
    (colorMode.value === "dark" ? "Clair" : "Sombre") +
    "\n\n(Double clic pour le mode Système)"
  );
});

const colorModeIcon = computed(() => {
  return colorMode.preference === "system"
    ? "ri:computer-line"
    : colorMode.value === "dark"
    ? "ri:moon-clear-line"
    : "ri:sun-fill";
});

const colorModeIconColor = computed(() => {
  return colorMode.value === "system"
    ? "hover:text-gray-500"
    : colorMode.value === "dark"
    ? "hover:text-blue-400"
    : "hover:text-yellow-400";
});

// When the user choose "system" mode, we need to add or remove "dark" class on the body tag based on the browser preference
onMounted(() => {
  watch(
    () => colorMode.value,
    (newMode, oldMode) => {
      if (newMode === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          // System mode and Dark mode is the preferred mode in browser
          document.documentElement.classList.add("dark");
        } else {
          // System mode and Light mode is the preferred mode in browser
          document.documentElement.classList.remove("dark");
        }
      } else if (oldMode === "system") {
        // Switched from System mode
        // document.documentElement.classList.remove("dark");
      }
    }
  );
});
</script>
