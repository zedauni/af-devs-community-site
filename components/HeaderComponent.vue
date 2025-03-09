<template>
  <!-- Navbar -->
  <header
    class="fixed top-0 left-0 z-50 mx-auto w-full border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-gray-50/10 dark:bg-gray-900/80"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <a href="/" class="text-2xl font-bold"
              >AF-<span class="-text-custom-blue-dark text-secondary"
                >DEV</span
              ></a
            >
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <nav class="ml-6 hidden space-x-8 md:flex">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'underline-effect font-bold text-secondary'
                  : 'underline-hover-effect text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50',
                'inline-flex items-center px-5 pt-1 font-medium transition-colors',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.name }}
            </a>
          </nav>
          <div class="hidden md:ml-4 md:flex md:items-center md:space-x-4">
            <button type="button" class="flex cursor-pointer items-center">
              <Icon name="ri:telegram-line" size="1.3em" aria-hidden="true" />
            </button>
            <ThemeToggle size="1.3em" />
          </div>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-controls="mobile-menu"
              @click="mobileMenuOpen = !mobileMenuOpen"
              aria-expanded="false"
            >
              <span class="sr-only">Ouvrir le menu principal</span>
              <Icon
                name="ri:menu-line"
                v-if="!mobileMenuOpen"
                class="block"
                aria-hidden="true"
              />
              <Icon
                name="ri:close-line"
                v-else
                class="block"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="md:hidden" id="mobile-menu" v-show="mobileMenuOpen">
      <div class="space-y-1 pt-2 pb-3">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-gray-800 dark:text-primary-400'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
            'block border-l-4 py-2 pr-4 pl-3 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </a>
      </div>
      <div class="border-t border-gray-200 pt-4 pb-3 dark:border-gray-700">
        <div class="flex items-center justify-between px-4">
          <ThemeToggle />
          <button type="button" class="flex cursor-pointer items-center">
            <Icon name="ri:telegram-line" size="1.3em" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
useHeadSafe({
  bodyAttrs: {
    class: ["pt-16"],
  },
});

const mobileMenuOpen = shallowRef(false);

const navigation = [
  { name: "Accueil", href: "/", current: true },
  { name: "Nos activités", href: "#activities", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Rejoindre", href: "/#community", current: false },
  { name: "Contact", href: "/#contact", current: false },
];
</script>
