<template>
  <Icon name="ri:facebook-fill" :size="size ?? '1.3em'" />
</template>

<script setup lang="ts">
defineProps<{ size?: string }>();
</script>