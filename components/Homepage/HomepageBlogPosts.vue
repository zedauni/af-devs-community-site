<template>
  <!-- Blog Section -->
  <section id="blog">
    <div class="container mx-auto px-4 md:w-9/12">
      <h2
        class="mb-6 text-center text-3xl font-bold text-secondary md:text-4xl"
      >
        Blog & Actualités
      </h2>
      <div class="mb-6 text-center" v-animate-on-scroll>
        Nous collaborons sur des projets open-source pour faire de l'Afrique un
        nouveau hub du développement.
      </div>
      <div class="mb-12 grid grid-cols-3 gap-6 md:grid-cols-6">
        <AppLink
          :to="{ name: 'tags-slug', params: { slug: 'dev' } }"
          class="btn-with-gradient inline-block px-4 py-2 text-center text-bw"
          >Tout</AppLink
        >
        <AppLink
          :to="{ name: 'tags-slug', params: { slug: 'dev' } }"
          class="btn-hover-gradient inline-block px-4 py-2 text-center"
          >Web</AppLink
        >
        <AppLink
          :to="{ name: 'tags-slug', params: { slug: 'dev' } }"
          class="btn-hover-gradient inline-block px-4 py-2 text-center"
          >Mobile</AppLink
        >
        <AppLink
          :to="{ name: 'tags-slug', params: { slug: 'dev' } }"
          class="btn-hover-gradient inline-block px-4 py-2 text-center"
          >IA</AppLink
        >
        <AppLink
          :to="{ name: 'tags-slug', params: { slug: 'dev' } }"
          class="btn-hover-gradient inline-block px-4 py-2 text-center"
          >Interviews</AppLink
        >
        <AppLink
          :to="{ name: 'tags-slug', params: { slug: 'dev' } }"
          class="btn-hover-gradient inline-block px-4 py-2 text-center"
          >News</AppLink
        >
      </div>
      <!-- Grid/List -->
      <div
        :class="
          viewMode === 'grid'
            ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'
            : 'space-y-4'
        "
      >
        <div
          v-for="article in articles"
          :key="article.id"
          class="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
          :class="viewMode === 'list' ? 'flex' : ''"
        >
          <ArticleCard
            :article="article"
            :viewMode="viewMode"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Article } from "~/schema/article";

type ViewType = "grid" | "list";

// View mode (grid/list)
const viewMode = ref<ViewType>("grid");

// Keyboard shortcuts bindings
const activeElement = useActiveElement();
const notUsingInput = computed(
  () =>
    activeElement.value?.tagName !== "INPUT" &&
    activeElement.value?.tagName !== "TEXTAREA",
);

const { v } = useMagicKeys();

whenever(logicAnd(v, notUsingInput), () => {
  viewMode.value = viewMode.value == "grid" ? "list" : "grid";
});

// Get articles from dedicated pinia store
const articleStore = useArticleStore();
const articles = ref<Article[]>(articleStore.getLatestArticles(3));
</script>
