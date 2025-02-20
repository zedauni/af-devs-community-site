import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxtjs/color-mode', '@nuxt/icon', '@vueuse/nuxt'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    dataValue: 'theme',
    storage: 'cookie', // 'localStorage' or 'sessionStorage' or 'cookie'
    storageKey: 'app-color-mode'
  },
  icon: {
    clientBundle: {
      // list of icons to explicitly include in the client bundle
      icons: [
        'ri:moon-clear-line',
        'ri:sun-fill',
        'ri:computer-line',
      ],
      // scan this folders for icons to include in the client bundle
      scan: {
        globInclude: ['components/**/*.vue', 'layout/**/*.vue', 'pages/**/*.vue'],
        globExclude: ['node_modules', 'dist'],
      },
    },
  },
})
