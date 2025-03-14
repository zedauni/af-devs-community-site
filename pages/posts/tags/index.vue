<template>
  <main class="container mx-auto px-4 py-12 sm:px-6 md:w-9/12">
    <!-- Tag Header -->
    <div class="mb-8 text-center">
      <h1
        class="text-decoration-primary mb-4 text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl dark:text-white"
      >
        Tags
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Explore all topics covered in our
        <AppLink :to="{ name: 'posts' }" class="font-bold text-secondary">
          publications
        </AppLink>
      </p>
    </div>

    <!-- Tags cloud -->
    <div
      v-if="sortedTags.length > 0"
      class="tag-cloud mt-12 flex flex-wrap items-center justify-center py-6"
    >
      <TagLink
        v-for="tag in sortedTags"
        :key="tag.title"
        :tag="tag"
        :class="[
          'm-2 scale-105 cursor-pointer rounded-full px-3 py-1 shadow-xs shadow-gray-400/50 transition-transform duration-300 ease-in-out dark:shadow-gray-50/25',
          getTagClass(tag.frequency),
        ]"
      >
        {{ tag.title }}
        <span class="ml-1 text-xs">({{ tag.frequency }})</span>
      </TagLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { AppLink } from "#components";

// Define route name and set route path
definePageMeta({
  name: "tags",
  path: "/tags",
});

interface TagWithFrequency {
  title: string;
  frequency: number;
}

// Access the article store
const store = useArticleStore();

// Compute tag frequency from all articles
const tagsWithFrequency = computed<TagWithFrequency[]>(() => {
  const frequencyMap = new Map<string, number>();
  store.articles.forEach((article) => {
    article.tags.forEach((tag) => {
      const lowerTitle = tag.title.toLowerCase();
      frequencyMap.set(lowerTitle, (frequencyMap.get(lowerTitle) || 0) + 1);
    });
  });
  return Array.from(frequencyMap.entries()).map(([title, frequency]) => ({
    title,
    frequency,
  }));
});

// Sort tags by frequency (descending) and alphabetically if equal
const sortedTags = computed(() => {
  return tagsWithFrequency.value.sort((a, b) => {
    if (b.frequency === a.frequency) {
      return a.title.localeCompare(b.title);
    }
    return b.frequency - a.frequency;
  });
});

// class="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
// Determine CSS class based on tag frequency
function getTagClass(frequency: number) {
  if (frequency >= 5)
    return "text-2xl font-bold bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-100";
  if (frequency >= 3)
    return "text-xl font-semibold bg-secondary-50 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200";
  if (frequency >= 2)
    return "text-lg bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-200";
  return "text-base bg-gray-50 text-gray-700 dark:bg-gray-600 dark:text-gray-300";
}

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

<style scoped>
/* Additional custom styles to enhance the elegant look */
.tag-cloud a:hover {
  transform: scale(1.05);
}
</style>
