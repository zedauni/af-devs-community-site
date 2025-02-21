import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: 'https://fonts.googleapis.com"',
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
    // Use the environment variable to set the baseURL
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
  },
  runtimeConfig: {
    public: {
      // Expose the baseURL to the runtime for client-side usage
      baseURL: process.env.NUXT_APP_BASE_URL || "/",
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/color-mode", "@nuxt/icon", "@vueuse/nuxt"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    dataValue: "theme",
    storage: "cookie", // 'localStorage' or 'sessionStorage' or 'cookie'
    storageKey: "app-color-mode",
  },
  icon: {
    clientBundle: {
      // list of icons to explicitly include in the client bundle
      icons: ["ri:moon-clear-line", "ri:sun-fill", "ri:computer-line"],
      // scan this folders for icons to include in the client bundle
      scan: {
        globInclude: [
          "components/**/*.vue",
          "layout/**/*.vue",
          "pages/**/*.vue",
        ],
        globExclude: ["node_modules", "dist"],
      },
    },
  },
});
