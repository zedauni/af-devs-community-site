<template>
  <NuxtLink :to="fullUrl">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useBaseUrl } from "~/composables/useBaseUrl";
import type { Article } from "~/schema/article";

interface Props {
  article: Article;
}

const props = defineProps<Props>();

const fullUrl = computed(() =>
  useBaseUrl(`posts/${props.article.href.toLowerCase()}`),
);
</script>
