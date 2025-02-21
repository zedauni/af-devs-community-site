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