<template>
  <!-- Navbar -->
  <header
    class="fixed top-0 left-0 z-50 mx-auto w-full border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-gray-50/10 dark:bg-gray-900/80"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <a :href="useBaseUrl('')" class="text-2xl font-bold"
              >AF-<span class="-text-custom-blue-dark text-secondary"
                >DEV</span
              ></a
            >
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <nav class="ml-6 hidden space-x-8 md:flex">
            <div
              v-for="item in navigation"
              :key="item.name"
              class="group relative"
              @mouseenter="item.submenu ? (openSubmenu = item.name) : null"
              @mouseleave="openSubmenu = null"
            >
              <a
                :href="item.submenu ? '#' : item.href"
                :class="[
                  {
                    'underline-effect font-bold text-secondary': item.current,
                    'text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50':
                      !item.current,
                    'underline-hover-effect': !item.current && !item.submenu,
                    'after:absolute after:-bottom-5 after:h-5 after:w-1/2':
                      !item.current && item.submenu,
                  },
                  'inline-flex items-center px-5 pt-1 font-medium transition-colors',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                @click="
                  item.submenu
                    ? ($event.preventDefault(),
                      (openSubmenu =
                        openSubmenu === item.name ? null : item.name))
                    : null
                "
              >
                {{ item.name }}
                <Icon
                  v-if="item.submenu"
                  :name="
                    openSubmenu === item.name
                      ? 'ri:arrow-up-s-line'
                      : 'ri:arrow-down-s-line'
                  "
                  class="ml-1"
                  aria-hidden="true"
                />
              </a>

              <!-- Submenu -->
              <div
                v-if="item.submenu && openSubmenu === item.name"
                class="ring-opacity-5 absolute left-0 z-10 mt-1 w-48 origin-top-left rounded-md bg-main-bg py-1 ring-1 shadow-lg ring-secondary-200 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
              >
                <a
                  v-for="subitem in item.submenu"
                  :key="subitem.name"
                  :href="subitem.href"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  role="menuitem"
                >
                  {{ subitem.name }}
                </a>
              </div>
            </div>
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
              <span class="sr-only">Open main menu</span>
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
        <div v-for="item in navigation" :key="item.name">
          <div class="flex items-center justify-between">
            <a
              :href="item.submenu ? '#' : item.href"
              :class="[
                item.current
                  ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-gray-800 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
                'block w-full border-l-4 py-2 pr-4 pl-3 text-base font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              @click="
                item.submenu
                  ? ($event.preventDefault(), toggleMobileSubmenu(item.name))
                  : null
              "
            >
              {{ item.name }}
            </a>
            <button
              v-if="item.submenu"
              class="px-4"
              @click="toggleMobileSubmenu(item.name)"
            >
              <Icon
                :name="
                  mobileOpenSubmenu === item.name
                    ? 'ri:arrow-up-s-line'
                    : 'ri:arrow-down-s-line'
                "
                class="text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
          <!-- Mobile Submenu -->
          <div
            v-if="item.submenu && mobileOpenSubmenu === item.name"
            class="pl-4"
          >
            <a
              v-for="subitem in item.submenu"
              :key="subitem.name"
              :href="subitem.href"
              class="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              {{ subitem.name }}
            </a>
          </div>
        </div>
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
const openSubmenu = ref<string | null>(null);
const mobileOpenSubmenu = ref<string | null>(null);

const toggleMobileSubmenu = (name: string) => {
  mobileOpenSubmenu.value = mobileOpenSubmenu.value === name ? null : name;
};

// Updated navigation with submenu support
const navigation = [
  { name: "Accueil", href: useBaseUrl(""), current: true },
  {
    name: "Nos activités",
    href: useBaseUrl("#activities"),
    current: false,
  },
  {
    name: "Publications",
    href: useBaseUrl("posts"),
    current: false,
    submenu: [
      { name: "Publications", href: useBaseUrl("posts") },
      { name: "Tags", href: useBaseUrl("tags") },
    ],
  },
  {
    name: "Rejoindre",
    href: useBaseUrl("#community"),
    current: false,
  },
  {
    name: "Contact",
    href: useBaseUrl("#contact"),
    current: false,
    submenu: [
      { name: "Contact", href: useBaseUrl("#contact") },
      { name: "Telegram", href: "https://t.me/devs_forum" },
    ],
  },
];
</script>
