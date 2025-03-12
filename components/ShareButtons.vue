<template>
  <div class="flex items-center space-x-4">
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400"
      >Share:</span
    >
    <div class="flex space-x-2">
      <a
        v-for="item in socialLinks"
        :key="item.name"
        :href="item.href"
        class="flex items-center rounded-full bg-gray-200 p-1.5 text-gray-700 hover:bg-gray-500 hover:text-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="sr-only">Share on {{ item.name }}</span>
        <component :is="item.icon" aria-hidden="true" size="1em" class="p-2" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconFacebook, IconTwitter } from '#components';

const requestUrl = useRequestURL();

const props = defineProps<{
  url?: string;
  title?: string;
}>();

const url = props.url || requestUrl.href;
const title = props.title || document.title;

const socialLinks = [
  {
    name: "Facebook",
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: IconFacebook,
  },
  {
    name: "Twitter",
    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    icon: IconTwitter,
  },
];
</script>
