<template>
  <!-- Navbar -->
  <header
    id="main-header"
    class="fixed top-0 left-0 z-50 mx-auto w-full border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-gray-50/10 dark:bg-gray-900/80"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <AppLink :to="{ name: 'home' }" class="text-2xl font-bold">
              AF-<span class="-text-custom-blue-dark text-secondary">DEV</span>
            </AppLink>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <!-- Desktop Navigation -->
          <nav class="ml-6 hidden md:block" aria-label="Main Navigation">
            <ul class="flex space-x-8">
              <li
                v-for="item in navigationItems"
                :key="item.name"
                class="group relative has-[.app-link-active]:text-secondary"
                @mouseenter="item.submenu ? openSubmenu(item.name) : null"
                @mouseleave="item.submenu ? closeSubmenu() : null"
              >
                <AppLink
                  :to="
                    item.submenu
                      ? '#'
                      : item.externalUrl
                        ? getHref(item)
                        : { name: item.routeName }
                  "
                  :class="[
                    'inline-flex items-center px-5 pt-1 text-base font-medium transition-colors',
                    'hover:text-gray-900 dark:hover:text-gray-50',
                    { 'underline-hover-effect': !item.submenu },
                    {
                      'after:absolute after:-bottom-5 after:h-5 after:w-1/2':
                        item.submenu,
                    },
                    item.submenu?.some((subitem) => subitem.current)
                      ? 'text-secondary'
                      : 'text-gray-700 dark:text-gray-200',
                  ]"
                  @click.prevent="toggleSubmenu(item.name, true, true)"
                >
                  {{ item.name }}
                  <Icon
                    v-show="item.submenu"
                    :name="
                      openedSubmenu === item.name
                        ? 'ri:arrow-up-s-line'
                        : 'ri:arrow-down-s-line'
                    "
                    class="ml-1"
                    aria-hidden="true"
                  />
                </AppLink>

                <!-- Submenu -->
                <ul
                  v-if="item.submenu"
                  class="ring-opacity-5 absolute left-0 z-10 mt-1 w-48 origin-top-left rounded-md bg-main-bg py-1 ring-1 shadow-lg ring-secondary-200 focus:outline-none"
                  :class="{ hidden: openedSubmenu !== item.name }"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <li
                    v-for="subitem in item.submenu"
                    :key="subitem.name"
                    role="none"
                  >
                    <AppLink
                      :to="
                        subitem.externalUrl
                          ? getHref(subitem)
                          : { name: subitem.routeName }
                      "
                      class="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                      role="menuitem"
                    >
                      {{ subitem.name }}
                    </AppLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div class="hidden md:ml-4 md:flex md:items-center md:space-x-4">
            <button type="button" class="flex cursor-pointer items-center">
              <Icon name="ri:telegram-line" size="1.3em" aria-hidden="true" />
            </button>
            <ThemeToggle size="1.3em" />
          </div>

          <!-- Mobile menu button -->
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-controls="mobile-menu"
              @click="mobileMenuOpen = !mobileMenuOpen"
              :aria-expanded="mobileMenuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <Icon
                :name="mobileMenuOpen ? 'ri:close-line' : 'ri:menu-line'"
                class="block"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden" id="mobile-menu" v-show="mobileMenuOpen">
      <nav aria-label="Mobile Navigation">
        <ul class="space-y-1 pt-2 pb-3">
          <li
            v-for="item in navigationItems"
            :key="item.name"
            class="has-[.app-link-active]:inner:border-l-4 has-[.app-link-active]:inner:border-l-secondary has-[.app-link-active]:text-secondary"
          >
            <div class="flex items-center justify-between">
              <AppLink
                :to="
                  item.submenu
                    ? '#'
                    : item.externalUrl
                      ? getHref(item)
                      : { name: item.routeName }
                "
                :class="[
                  'block w-full border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium',
                  'text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
                ]"
                @click.prevent="
                  item.submenu ? toggleMobileSubmenu(item.name) : null
                "
              >
                {{ item.name }}
              </AppLink>
              <button
                v-if="item.submenu"
                class="px-4"
                @click="toggleMobileSubmenu(item.name)"
                :aria-expanded="mobileOpenSubmenu === item.name"
                :aria-label="`Toggle ${item.name} submenu`"
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
            <ul
              v-if="item.submenu"
              class="pl-4"
              :class="{ hidden: mobileOpenSubmenu !== item.name }"
            >
              <li v-for="subitem in item.submenu" :key="subitem.name">
                <AppLink
                  :to="
                    subitem.externalUrl
                      ? getHref(subitem)
                      : { name: subitem.routeName }
                  "
                  class="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                  {{ subitem.name }}
                </AppLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

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

const { navigationItems, getHref } = useMenu();

// State for mobile and desktop menus
const mobileMenuOpen = shallowRef(false);
const mobileOpenSubmenu = ref<string | null>(null);
const openedSubmenu = ref<string | null>(null);
const submenuKeepOpen = shallowRef(false);

// Toggle mobile submenu
const toggleMobileSubmenu = (name: string) => {
  mobileOpenSubmenu.value = mobileOpenSubmenu.value === name ? null : name;
};

/**
 * Close the opened submenu.
 * @param {boolean} [force=false] If true, forces the submenu to close, even if
 * submenuKeepOpen is true.
 */
const closeSubmenu = (force = false) => {
  if (force || !submenuKeepOpen.value) {
    openedSubmenu.value = null;
  }
};

/**
 * Opens submenu of the given menu name by setting its name in openedSubmenu.
 * 
 * @param {string} name - Name of menu to open the submenu for.
 * @param {boolean} [keepOpen=false] - Whether to keep the submenu open even after mouse leave.
 */

const openSubmenu = (name: string, keepOpen = false) => {
  submenuKeepOpen.value = keepOpen;
  openedSubmenu.value = name;
};

/**
 * Toggles submenu of the given menu name.
 * 
 * If the submenu for the given menu name is currently open, it will be closed.
 * The force flag can be used to force the submenu to close, even if submenuKeepOpen is true.
 * If the submenu is closed, it will be opened.
 * The keepOpen flag can be used to keep the submenu open even after mouse leave.
 * 
 * @param {string} name - Name of menu to toggle the submenu for.
 * @param {boolean} [keepOpen=false] - Whether to keep the submenu open even after mouse leave.
 * @param {boolean} [force=false] - If true, forces the submenu to close, even if
 * submenuKeepOpen is true.
 */
const toggleSubmenu = (name: string, keepOpen = false, force = false) => {
  if (openedSubmenu.value === name) {
    closeSubmenu(force);
  } else {
    openSubmenu(name, keepOpen);
  }
};
</script>
