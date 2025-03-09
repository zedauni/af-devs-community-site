<template>
  <!-- Blog Section -->
  <section id="blog">
    <div class="container md:w-9/12 mx-auto px-4" v-animate-on-scroll>
      <h2
        class="text-3xl md:text-4xl font-bold text-center -text-gradient-p-to-s text-secondary mb-6"
      >
        Blog & Actualités
      </h2>
      <div class="text-center mb-6">
        Nous collaborons sur des projets open-source pour faire de l'Afrique un
        nouveau hub du développement.
      </div>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12">
        <a
          href="#"
          class="inline-block w-text-wb btn-with-gradient px-4 py-2 text-wb text-center"
          >Tout</a
        >
        <a
          href="#"
          class="inline-block w-text-wb btn-hover-gradient px-4 py-2 text-bw text-center"
          >Web</a
        >
        <a
          href="#"
          class="inline-block w-text-wb btn-hover-gradient px-4 py-2 text-bw text-center"
          >Mobile</a
        >
        <a
          href="#"
          class="inline-block w-text-wb btn-hover-gradient px-4 py-2 text-bw text-center"
          >IA</a
        >
        <a
          href="#"
          class="inline-block w-text-wb btn-hover-gradient px-4 py-2 text-bw text-center"
          >Interviews</a
        >
        <a
          href="#"
          class="inline-block w-text-wb btn-hover-gradient px-4 py-2 text-bw text-center"
          >News</a
        >
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="(post, index) in posts"
          :key="index"
          class="bg-pale-gray dark:bg-transparent rounded-lg shadow-md border border-gray-100 dark:border-gray-50/10 hover:border-gray-200 dark:hover:border-gray-50/75 overflow-hidden transition-transform hover:-translate-y-2 duration-500"
        >
          <a href="#">
            <PublicImage :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <span
                class="inline-block bg-primary text-white text-sm font-semibold my-1 px-2 py-1 rounded" :style="{ backgroundColor: post.tag.color }"
              >
                {{ post.tag.label }}
              </span>
              <h3 class="text-xl hover:text-custom-blue font-semibold mt-2 mb-2">
                {{ post.title }}
              </h3>
              <p class="mb-4">{{ post.description }}</p>
              <a
                href="#"
                class="inline-block text-primary font-semibold hover:text-custom-blue transition-transform hover:translate-x-2 hover:-translate-y-0.25 duration-500"
                >Lire l'article →</a
              >
            </div></a
          >
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    title: "Les meilleures pratiques pour le développement web moderne",
    description:
      "Découvrez comment créer des sites web performants et accessibles.",
    image: "images/posts/blog1.jpeg",
    tag: {label: "WEB", color: "darkblue"},
  },
  {
    title: "Rencontre avec Fatou, développeuse sénégalaise spécialisée en IA",
    description: "Découvrez le parcours inspirant de Fatou.",
    image: "images/posts/blog2.webp",
    tag: {label: "INTERVIEW", color: "purple"},
  },
  {
    title: "L'Afrique, futur hub de l'innovation technologique ?",
    description: "Analyse des tendances tech en Afrique.",
    image: "images/posts/blog3.jpg",
    tag: {label: "NEWS", color: "darkred"},
  },
];
</script>
