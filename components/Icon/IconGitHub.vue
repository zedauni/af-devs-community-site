<template>
  <Icon name="ri:github-fill" :size="size ?? '1.3em'" />
</template>

<script setup lang="ts">
defineProps<{ size?: string }>();
</script>