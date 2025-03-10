<template>
  <div class="flex flex-col items-center rounded-lg bg-gray-50 p-6 dark:bg-gray-800 sm:flex-row sm:items-start">
    <img
      class="h-16 w-16 rounded-full object-cover sm:mr-6"
      :src="author.avatarUrl"
      :alt="author.name"
    />
    <div>
      <div class="text-center sm:text-left">
        <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ author.name }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ author.role }}</p>
      </div>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {{ author.bio }}
      </p>
      <div class="mt-4 flex justify-center space-x-4 sm:justify-start">
        <a
          v-for="social in author.socialLinks"
          :key="social.name"
          :href="social.href"
          class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">{{ social.name }}</span>
          <component :is="social.icon" class="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  author: {
    name: string;
    role: string;
    bio: string;
    avatarUrl: string;
    socialLinks: Array<{
      name: string;
      href: string;
      icon: any;
    }>;
  };
}>()
</script>