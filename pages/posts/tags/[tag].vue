<template>
  <main class="container mx-auto px-4 py-12 sm:px-6 md:w-9/12">
    <!-- Tag Header -->
    <div class="mb-8 text-center">
      <h1
        class="text-decoration-primary mb-4 text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl dark:text-white"
      >
        #{{ tagSlug }}
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Discover all articles related to
        <span class="font-bold text-secondary">{{ tagSlug }}</span>
      </p>
    </div>

    <!-- View Toggle -->
    <div class="mb-6 flex items-center justify-between">
      <p class="text-gray-600 dark:text-gray-300">
        {{ articles.length }} articles
      </p>
      <div class="flex items-center gap-2">
        <button
          @click="viewMode = 'grid'"
          class="flex items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          :class="{ 'bg-gray-100 dark:bg-gray-800': viewMode === 'grid' }"
          aria-label="Grid view"
        >
          <Icon name="ri:grid-fill" size="1.2em" />
        </button>
        <button
          @click="viewMode = 'list'"
          class="flex items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          :class="{ 'bg-gray-100 dark:bg-gray-800': viewMode === 'list' }"
          aria-label="List view"
        >
          <Icon name="ri:list-unordered" size="1.2em" />
        </button>
      </div>
    </div>

    <!-- Articles Grid/List -->
    <div
      v-if="articles.length > 0"
      :class="[
        viewMode === 'grid'
          ? 'grid grid-cols-1 gap-6 sm:grid-cols-2'
          : 'space-y-4',
      ]"
    >
      <div
        v-for="article in articles"
        :key="article.id"
        class="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
        :class="viewMode === 'list' ? 'flex' : ''"
      >
        <ArticleCard :article="article" :viewMode="viewMode" />
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="py-12 text-center">
      <Icon name="ri:article-line" class="mx-auto h-12 w-12 text-gray-400" />
      <h3 class="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
        No articles found
      </h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        No articles found with the tag
        <span class="text-secondary">{{ tagSlug }}</span>
      </p>
    </div>

    <!-- Related Tags -->
    <div v-if="otherTags.length > 0" class="mt-12">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Other Tags
      </h2>
      <div class="flex flex-wrap justify-between gap-2">
        <TagLink
          v-for="tag in otherTags"
          :key="tag.title"
          :tag="tag"
          class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          {{ tag.title }}
        </TagLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Article } from "~/schema/article";
import type { Tag } from "~/schema/tag";

// Define route name and set route path
definePageMeta({
  name: "tags-slug",
  path: "/tags/:slug",
});

// Get the current tag from the route
const route = useRoute();
const tagSlug = computed(() => route.params.slug as string);

// Access the store
const articleStore = useArticleStore();

// Get current tag and related tags
const allTags = computed<Tag[]>(() => articleStore.getArticlesTags());
const currentTag = computed<Tag | undefined>(() =>
  allTags.value.find(
    (tag) => tag.title.toLowerCase() === tagSlug.value.toLowerCase(),
  ),
);
const otherTags = computed<Tag[]>(() =>
  allTags.value.filter(
    (tag) => tag.title.toLowerCase() !== tagSlug.value.toLowerCase(),
  ),
);

// Get articles for the current tag
const articles = computed<Article[]>(() => {
  if (!currentTag.value) return [];
  return articleStore.getArticlesByTag(currentTag.value);
});

// Throw 404 if tag not found
watchEffect(() => {
  if (allTags.value.length > 0 && !currentTag.value) {
    throw createError({ statusCode: 404, statusMessage: "Tag not found" });
  }
});

// View mode (grid/list)
const viewMode = ref<"grid" | "list">("list");

// Keyboard shortcuts
const { v } = useMagicKeys();
const activeElement = useActiveElement();
const notUsingInput = computed(
  () =>
    activeElement.value?.tagName !== "INPUT" &&
    activeElement.value?.tagName !== "TEXTAREA",
);

whenever(logicAnd(v, notUsingInput), () => {
  viewMode.value = viewMode.value === "grid" ? "list" : "grid";
});
</script>
