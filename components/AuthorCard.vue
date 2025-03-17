<template>
  <div
    class="flex flex-col items-center rounded-lg bg-gray-50 p-6 sm:flex-row sm:items-start dark:bg-gray-800"
  >
    <AppLink
      :to="{ name: 'authors-slug', params: { slug: author.name } }"
      class="inline-block h-32 w-32 sm:mr-6"
    >
      <NuxtImg
        class="rounded-full object-contain"
        :src="author.avatarUrl"
        :alt="author.name"
        placeholder="/images/placeholder.svg"
      />
    </AppLink>
    <div>
      <div class="text-center sm:text-left">
        <h3 class="text-lg font-medium text-gray-900 dark:text-white">
          <AppLink
            :to="{ name: 'authors-slug', params: { slug: author.name } }"
          >
            {{ author.name }}
          </AppLink>
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ author.role }}
        </p>
      </div>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {{ author.bio }}
      </p>
      <div class="mt-4 flex justify-center space-x-4 sm:justify-start">
        <AppLink
          v-for="social in author.socialLinks"
          :key="social.name"
          :href="social.href"
          class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">{{ social.name }}</span>
          <component :is="social.icon" class="h-5 w-5" aria-hidden="true" />
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
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
}>();
</script>
