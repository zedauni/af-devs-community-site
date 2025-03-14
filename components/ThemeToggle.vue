<template>
  <button
    @click.prevent="handleThemeModeClick"
    class="flex cursor-pointer items-center text-gray-700 dark:text-gray-200"
    aria-label="Permuter le thème sombre/clair"
  >
    <Icon
      id="theme-mode"
      :name="colorModeIcon"
      :size="size ?? '1.3em'"
      class="rounded-full fill-gray-700 text-gray-700 dark:fill-gray-200 dark:text-gray-200"
      :class="colorModeIconColor"
      :title="colorModeTitle"
    />
  </button>
</template>

<script setup lang="ts">
defineProps<{ size?: string }>();

const { themeMode, toggleDarkMode, forceSystemMode } = useThemeMode();

const { handleClick: handleThemeModeClick } = useClickHandler(
  toggleDarkMode,
  forceSystemMode,
);

const colorModeTitle = computed(() => {
  return (
    "Activer le Mode " +
    (themeMode.value.indexOf("dark") !== -1 ? "Clair" : "Sombre") +
    "\n\n(Double clic pour le mode Système)"
  );
});

const colorModeIcon = computed(() => {
  return themeMode.value.indexOf("auto") !== -1
    ? "ri:computer-line"
    : themeMode.value === "dark"
      ? "ri:moon-clear-line"
      : "ri:sun-line";
});

const colorModeIconColor = computed(() => {
  return themeMode.value.indexOf("auto") !== -1
    ? "hover:text-gray-500"
    : themeMode.value === "dark"
      ? "hover:text-yellow-400"
      : "hover:text-blue-400";
});
</script>
