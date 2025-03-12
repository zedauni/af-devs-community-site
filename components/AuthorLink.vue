<template>
  <NuxtLink :to="fullUrl">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useBaseUrl } from "~/composables/useBaseUrl";
import type { Author } from "~/schema/author";

interface Props {
  author: Author;
}

const props = defineProps<Props>();

const fullUrl = computed(() =>
  useBaseUrl(`authors/${props.author.name.toLowerCase()}`),
);
</script>
