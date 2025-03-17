<template>
  <Main>
    <template #header>
      <HeaderComponent />
    </template>
    <template #body>
      <slot />
    </template>
    <template #footer>
      <FooterComponent />
    </template>
  </Main>
</template>

<script setup lang="ts">
useHeadSafe({
  bodyAttrs: {
    class: [
      "bg-back-main-light",
      "dark:bg-back-main-dark",
      "text-light",
      "dark:text-dark",
      "transition-colors",
      "duration-[var(--transition-duration)]",
    ],
  },
});
</script>
