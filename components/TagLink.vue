<template>
  <NuxtLink :to="fullUrl">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useBaseUrl } from "~/composables/useBaseUrl";
import type { Tag } from "~/schema/tag";

interface Props {
  tag: Tag;
}

const props = defineProps<Props>();

const fullUrl = computed(() =>
  useBaseUrl(`tags/${props.tag.title.toLowerCase()}`),
);
</script>
