/**
 * Custom composable to manage dark mode preferences in a Nuxt 3 application.
 * This composable provides functionality to:
 * - Toggle between dark and light mode
 * - Force the system's default color mode
 * 
 * TODO Make use of [VueUse useDark](https://vueuse.org/core/useDark). So colorMode dependency can be removed
 */

export const useDarkMode = () => {
  // Access color mode composable (requires `@nuxt/color-mode` module)
  const colorMode = useColorMode();

  // Toggles between dark mode and light mode.
  const toggleDarkMode = () => {

    // Update the user's color mode preference
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  };

  /**
   * Forces the color mode to follow the system's default setting.
   * - If the mode is already set to "system", do nothing.
   * - Otherwise, switch to "system" mode.
   */
  const forceSystemMode = () => {
    if (colorMode.value === "system") return;

    colorMode.preference = "system";
  };

  return { colorMode, toggleDarkMode, forceSystemMode };
};
