<template>
  <main
    class="duration-[var(--transition-duration)]sm:px-6 relative container mx-auto px-4 py-12 transition-colors md:w-9/12"
  >
    <!-- Hero Section -->
    <div
      class="relative mb-16 text-center before:absolute before:inset-0 before:z-0 before:bg-[url('/images/bg-pattern-dark.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-10 dark:before:bg-[url('/images/bg-pattern-light.svg')]"
    >
      <h1
        class="text-decoration-primary text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl"
      >
        Blog & Actualités
      </h1>
      <p
        class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
        v-animate-on-scroll
      >
        Explorez notre catalogue d'actualités et d'articles propulsés par la
        communauté.
      </p>
    </div>

    <div class="flex flex-col-reverse gap-8 lg:flex-row">
      <!-- Sidebar -->
      <div class="flex-shrink-0 lg:w-64">
        <!-- Ads -->
        <div class="relative mb-6 flex justify-center sm:hidden">
          <!-- Placeholder image for vertical Ads -->
          <NuxtImg
            src="https://placehold.co/320x100/orange/white?text=Ads&grayscale&font=playfair-display"
            alt="Ad"
            class="inset-0"
            placeholder="/images/placeholder.svg"
          />
        </div>
        <div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <!-- Search -->
          <div class="relative">
            <div
              v-if="searchQuery.length"
              @click="searchQuery = ''"
              class="absolute inset-y-0 left-0 flex cursor-pointer items-center pl-1"
            >
              <Icon name="ri:close-line" size="1.3em" class="text-gray-400" />
            </div>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Rechercher..."
              class="w-full rounded-md border border-secondary-300 py-2 pr-8 pl-6 focus:ring focus:ring-secondary focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <div
              class="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            >
              <Icon name="ri:search-line" size="1.3em" class="text-gray-400" />
            </div>
          </div>
        </div>
        <div class="mt-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <!-- Categories -->
          <div class="">
            <label class="mb-2 block font-medium text-secondary">
              Sujets populaires
            </label>
            <div class="space-y-2 space-x-1">
              <label
                v-for="tag in uniqueTags"
                :key="tag.title"
                class="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-800 dark:text-primary-300"
              >
                <AppLink
                  :to="{ name: 'tags-slug', params: { slug: tag.title } }"
                  class="ml-1"
                >
                  {{ tag.title }}
                </AppLink>
              </label>
            </div>
          </div>
        </div>
        <div
          class="mt-4 hidden rounded-lg bg-white p-6 shadow-lg sm:block dark:bg-gray-800"
        >
          <!-- Sponsorship -->
          <div class="relative" v-animate-on-scroll>
            <!-- Placeholder image for Ads -->
            <NuxtImg
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
              alt="PUB"
              class="inset-0"
              placeholder="/images/placeholder.svg"
            />
          </div>
        </div>
        <div class="mt-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <!-- Ads -->
          <div class="relative hidden sm:block" v-animate-on-scroll>
            <!-- Placeholder image for vertical Ads -->
            <NuxtImg
              src="https://placehold.co/320x480/orange/white?text=Ads&grayscale&font=playfair-display"
              alt="Ad"
              class="inset-0 mx-auto"
              placeholder="/images/placeholder.svg"
            />
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1">
        <!-- Large Leaderboard Ad -->
        <div
          class="mb-6 flex items-center justify-center rounded-lg border border-gray-200 bg-back-main shadow-sm dark:border-gray-800 dark:bg-gray-800" v-animate-on-scroll
        >
          <!-- Placeholder image for Ads -->
          <NuxtImg
            src="https://placehold.co/970x90/transparent/gray?text=Space+reserved+for+Sponsorship+%2B+Ads&grayscale&font=poppins"
            alt="PUB"
            class="inset-0 hidden sm:inline"
            placeholder
          />
          <NuxtImg
            src="https://placehold.co/320x100/transparent/gray?text=Space+reserved+for+Sponsorship+%2B+Ads&grayscale&font=poppins"
            alt="PUB"
            class="inset-0 sm:hidden"
            placeholder
          />
        </div>

        <!-- Grid/List -->
        <div
          :class="
            viewMode === 'grid'
              ? 'grid grid-cols-1 gap-6 sm:grid-cols-2'
              : 'space-y-4'
          "
        >
          <div
            v-for="article in paginatedArticles"
            :key="article.id"
            class="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
            :class="viewMode === 'list' ? 'flex' : ''"
          >
            <ArticleCard :article="article" :viewMode="viewMode" />
          </div>
        </div>

        <!-- Pagination -->
        <div
          class="mt-8 flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm dark:bg-gray-800"
        >
          <div class="flex flex-1 justify-between sm:hidden">
            <button
              @click="currentPage--"
              :disabled="currentPage === 1"
              class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              :class="{
                'cursor-not-allowed opacity-50': currentPage === 1,
                'cursor-pointer': currentPage !== 1,
              }"
            >
              Précédent
            </button>
            <button
              @click="currentPage++"
              :disabled="currentPage >= totalPages"
              class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              :class="{
                'cursor-not-allowed opacity-50': currentPage >= totalPages,
                'cursor-pointer': currentPage < totalPages,
              }"
            >
              Suivant
            </button>
          </div>
          <div
            class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-sm text-gray-700 dark:text-gray-300">
                <span class="font-medium">{{
                  (currentPage - 1) * itemsPerPage + 1
                }}</span>
                à
                <span class="font-medium">{{
                  Math.min(currentPage * itemsPerPage, filteredArticles.length)
                }}</span>
                sur
                <span class="font-medium">{{ filteredArticles.length }}</span>
              </p>
            </div>
            <div>
              <nav
                class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-700 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-400 dark:ring-gray-500 dark:hover:bg-gray-700"
                  :class="{
                    'cursor-not-allowed opacity-50': currentPage === 1,
                    'cursor-pointer': currentPage !== 1,
                  }"
                >
                  <span class="sr-only">Précédent</span>

                  <Icon name="ri:arrow-left-s-line" size="1.3em" class="" />
                </button>
                <button
                  v-for="page in displayedPages"
                  :key="page"
                  @click="currentPage = page"
                  class="cursor-pointer"
                  :class="[
                    currentPage === page
                      ? 'relative z-10 inline-flex items-center bg-gray-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-gray-300 ring-inset focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:ring-gray-500'
                      : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-300 dark:ring-gray-500 dark:hover:bg-gray-700',
                  ]"
                >
                  {{ page }}
                </button>
                <button
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
                  class="relative inline-flex cursor-pointer items-center rounded-r-md px-2 py-2 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-300 dark:ring-gray-500 dark:hover:bg-gray-700"
                  :class="{
                    'cursor-not-allowed opacity-50': currentPage >= totalPages,
                  }"
                >
                  <span class="sr-only">Suivant</span>
                  <Icon name="ri:arrow-right-s-line" size="1.3em" class="" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useActiveElement, useMagicKeys, whenever } from "@vueuse/core";
import { logicAnd } from "@vueuse/math";
import type { Article } from "~/schema/article";
import type { Tag } from "~/schema/tag";
import { useArticleStore } from "~/stores/useArticleStore";

// Define route name
definePageMeta({
  name: "posts",
});

type ViewType = "grid" | "list";

// View mode (grid/list)
const viewMode = ref<ViewType>("grid");

// Filters
const searchQuery = ref("");
const selectedTags = ref<string[]>([]);
const sortBy = ref("like");
const minStars = ref(0);

// Pagination
const currentPage = ref(1);
const itemsPerPage = 8;

// Get articles from dedicated pinia store
const articleStore = useArticleStore();
const articles = ref<Article[]>(articleStore.getArticles());

// Get tags from dedicated pinia store
const tagStore = useArticleStore();
const uniqueTags = ref<Tag[]>(tagStore.getArticlesTags());

// Computed properties
const filteredArticles = computed<Article[]>(() => {
  let result = articles.value;

  if (result.length === 0) {
    return [];
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query),
    );
  }

  // Filter by tags
  if (selectedTags.value.length > 0) {
    result = result.filter((article) =>
      selectedTags.value.includes(article.tags[0].title),
    );
  }

  // Sort
  result = [...result].sort((a, b) => {
    switch (sortBy.value) {
      case "title":
        return a.title.localeCompare(b.title);
      case "recent":
        return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
      default:
        return 0;
    }
  });

  return result;
});

// Pagination
const totalPages = computed(() =>
  Math.ceil(filteredArticles.value.length / itemsPerPage),
);

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredArticles.value.slice(start, end);
});

const displayedPages = computed(() => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let l: number;

  for (let i = 1; i <= totalPages.value; i++) {
    if (
      i === 1 ||
      i === totalPages.value ||
      (i >= currentPage.value - delta && i <= currentPage.value + delta)
    ) {
      range.push(i);
    }
  }

  range.forEach((i) => {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  });

  return range;
});

// Watch for filter changes to reset pagination
watch([searchQuery, selectedTags, minStars, sortBy], () => {
  currentPage.value = 1;
});

// Keyboard shortcuts bindings
const activeElement = useActiveElement();
const notUsingInput = computed(
  () =>
    activeElement.value?.tagName !== "INPUT" &&
    activeElement.value?.tagName !== "TEXTAREA",
);

const { v } = useMagicKeys();

whenever(logicAnd(v, notUsingInput), () => {
  viewMode.value = viewMode.value == "grid" ? "list" : "grid";
});
</script>
