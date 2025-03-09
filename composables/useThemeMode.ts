export type ThemeMode = "light" | "dark" | "auto:dark" | "auto:light";

export const useThemeMode = () => {
  const mounted = ref(false);

  // Cookie for persisting theme preference
  const themeCookie = useCookie<ThemeMode>("theme-mode", {
    default: () => "light",
    watch: "shallow",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });

  // Create a reactive reference for the theme, initialized from the cookie
  const themeMode = ref<ThemeMode>(themeCookie.value || "light");

  // Synchronize: update the cookie whenever the theme changes
  watch(
    themeMode,
    (newTheme) => {
      themeCookie.value = newTheme;
    },
    { immediate: true },
  );

  useHead({
    htmlAttrs: computed(() => ({
      class: themeCookie.value.indexOf("dark") !== -1 ? 'dark' : '',
    })),
  });

  // Function to toggle dark theme modes
  const toggleDarkMode = () => {
    if (mounted && themeMode.value.indexOf("auto") !== -1) {
      setThemeMode(themeMode.value === "auto:dark" ? "light" : "dark");
      return;
    }
    
    setThemeMode(themeMode.value === "light" ? "dark" : "light");
  };

  // Function to force system theme modes
  const forceSystemMode = () => {
    if (!mounted.value) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (mediaQuery.matches && themeMode.value !== "auto:dark") {
      setThemeMode("auto:dark");
    } else if (!mediaQuery.matches && themeMode.value !== "auto:light") {
      setThemeMode("auto:light");
    }
  };

  // Set theme directly to a specific mode
  const setThemeMode = (mode: ThemeMode) => {
    themeMode.value = mode;
  };

  // Initialize system preference detection when component is mounted
  onMounted(() => {
    mounted.value = true;

    // Check initial system preference
    const systemColorSchemeIsDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // Set up listener for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      if (themeMode.value.indexOf("auto") !== -1) {
        if (e.matches && themeMode.value !== "auto:dark") {
          themeMode.value = "auto:dark";
        } else if (!e.matches && themeMode.value !== "auto:light") {
          themeMode.value = "auto:light";
        }
      }
    });
  });

  return {
    themeMode,
    toggleDarkMode,
    forceSystemMode,
    setThemeMode,
  };
};
