<template>
  <div
    class="group relative flex h-full w-full overflow-hidden rounded-lg border border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800"
    :class="viewMode === 'list' ? '' : 'flex-col'"
  >
    <div
      class="aspect-h-4 aspect-w-3 sm:aspect-none overflow-hidden bg-gray-200 sm:h-48"
      :class="viewMode === 'list' ? 'w-48 flex-shrink-0' : ''"
    >
      <AppLink :href="article.href">
        <img
          :src="article.imageUrl"
          :alt="article.title"
          class="h-full w-full object-cover object-center transition-transform duration-[var(--transition-duration-x3)] hover:scale-105 sm:h-full sm:w-full"
        />
      </AppLink>
    </div>
    <div class="flex flex-1 flex-col space-y-3 p-4">
      <div class="flex items-center space-x-2">
        <span
          v-for="tag in article.tags"
          :key="tag.title"
          class="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-800 dark:text-primary-300"
        >
          <TagLink :tag="tag">
            {{ tag.title }}
          </TagLink>
        </span>
      </div>
      <h3
        class="text-sm font-medium text-gray-900 hover:font-semibold dark:text-white"
      >
        <AppLink :href="article.href">
          {{ article.title }}
        </AppLink>
      </h3>
      <p class="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
        {{ article.description }}
      </p>
      <div class="mt-auto flex items-center">
        <div class="flex-shrink-0">
          <AuthorLink :author="article.author">
            <img
              class="h-8 w-8 rounded-full"
              :src="article.author.imageUrl"
              :alt="article.author.name"
            />
          </AuthorLink>
        </div>
        <div class="ml-2 space-y-1">
          <p class="text-xs font-medium text-gray-900 dark:text-white">
            <AuthorLink :author="article.author" class="hover:text-secondary">
              {{ article.author.name }}
            </AuthorLink>
          </p>
          <div class="flex space-x-1 text-xs text-gray-500 dark:text-gray-400">
            <time :datetime="article.datetime">{{ article.date }}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{{ article.readingTime }} read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "~/schema/article";

defineProps<{
  viewMode?: string;
  article: Article;
}>();
</script>
