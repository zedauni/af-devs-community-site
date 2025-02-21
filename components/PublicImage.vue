<template>
  <img :src="fullUrl" :alt="alt" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { useBaseUrl } from '~/composables/useBaseUrl';

// Define props for the component
interface Props {
  src: string;
  alt?: string;
}

// Extract props and attributes
const props = defineProps<Props>();

// Compute the full URL using the composable
const fullUrl = computed(() => useBaseUrl(props.src));
</script>