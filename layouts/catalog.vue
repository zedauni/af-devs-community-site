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
    "bg-background-light",
    "dark:bg-background-dark",
    "text-text-light",
    "dark:text-text-dark",
    "transition-colors",
    "duration-300",
  ],
},
});
</script>
