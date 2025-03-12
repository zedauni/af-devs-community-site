<template>
  <Icon name="ri:twitter-fill" :size="size ?? '1.3em'" />
</template>

<script setup lang="ts">
defineProps<{ size?: string }>();
</script>