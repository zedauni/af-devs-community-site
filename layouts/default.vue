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
      "bg-main-bg-light",
      "dark:bg-main-bg-dark",
      "text-light",
      "dark:text-dark",
      "transition-colors",
      "duration-300",
    ],
  },
});
</script>
