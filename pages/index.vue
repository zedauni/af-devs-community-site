<template>
  <div>
    <HomepageHero class="pt-16" />
    <HomepageSeparationLine />
    <HomepageServices />
    <HomepageSeparationLine />
    <HomepageBlogPosts />
    <HomepageSeparationLine />
    <HomepageCommunity />
    <HomepageSeparationLine />
    <HomepageContact />
  </div>
</template>

<script setup lang="ts">
// Define route name
definePageMeta({
  name: "home",
});
</script>