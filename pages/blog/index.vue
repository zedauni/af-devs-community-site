<template>
  <div
    class="relative min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900"
  >
    <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div
        class="relative mb-16 text-center before:absolute before:inset-0 before:z-0 before:bg-[url('~/assets/img/bg-pattern-dark.svg')] dark:before:bg-[url('~/assets/img/bg-pattern-light.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-10"
      >
        <h1
          class="text-gradient-p-to-s text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl dark:text-white"
        >
          Blog & Actualités
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Explorez notre catalogue d'actualités et d'articles propulsés par la
          communauté.
        </p>
      </div>

      <div class="flex flex-col-reverse gap-8 lg:flex-row">
        <!-- Sidebar -->
        <div class="flex-shrink-0 lg:w-64">
          <!-- Ads -->
          <div class="relative mb-6 flex justify-center sm:hidden">
            <!-- Placeholder image for vertical Ads -->
            <img
              src="https://placehold.co/320x100/orange/white?text=Ads&grayscale&font=playfair-display"
              alt="Ad"
              class="inset-0"
            />
          </div>
          <div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <!-- Search -->
            <div class="relative">
              <div
                v-if="searchQuery.length"
                @click="searchQuery = ''"
                class="absolute inset-y-0 left-0 flex cursor-pointer items-center pl-1"
              >
                <Icon name="ri:close-line" size="1.3em" class="text-gray-400" />
              </div>
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Rechercher..."
                class="w-full rounded-md border border-secondary-300 py-2 pr-8 pl-6 focus:ring focus:ring-secondary focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <div
                class="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
              >
                <Icon
                  name="ri:search-line"
                  size="1.3em"
                  class="text-gray-400"
                />
              </div>
            </div>
          </div>
          <div class="mt-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <!-- Categories -->
            <div class="">
              <label class="mb-2 block font-medium text-secondary">
                Sujets populaires
              </label>
              <div class="space-y-2 space-x-1">
                <label
                  v-for="tag in uniqueTags"
                  :key="tag"
                  class="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-800 dark:text-primary-300"
                >
                  <a href="#">
                    {{ tag }}
                  </a>
                </label>
              </div>
            </div>
          </div>
          <div
            class="mt-4 hidden rounded-lg bg-white p-6 shadow-lg sm:block dark:bg-gray-800"
          >
            <!-- Sponsorship -->
            <div class="relative">
              <!-- Placeholder image for Ads -->
              <img
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
                alt="PUB"
                class="inset-0"
              />
            </div>
          </div>
          <div class="mt-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <!-- Ads -->
            <div class="relative hidden sm:block">
              <!-- Placeholder image for vertical Ads -->
              <img
                src="https://placehold.co/320x480/orange/white?text=Ads&grayscale&font=playfair-display"
                alt="Ad"
                class="inset-0"
              />
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1">
          <!-- Large Leaderboard Ad -->
          <div
            class="mb-6 flex items-center justify-between rounded-lg border border-gray-200 bg-main-bg shadow-sm dark:border-gray-800 dark:bg-gray-800"
          >
            <!-- Placeholder image for Ads -->
            <img
              src="https://placehold.co/970x90/transparent/gray?text=Space+reserved+for+Sponsorship+%2B+Ads&grayscale&font=poppins"
              alt="PUB"
              class="inset-0 hidden sm:inline"
            />
            <img
              src="https://placehold.co/320x100/transparent/gray?text=Space+reserved+for+Sponsorship+%2B+Ads&grayscale&font=poppins"
              alt="PUB"
              class="inset-0 sm:hidden"
            />
          </div>

          <!-- Grid/List -->
          <div
            :class="
              viewMode === 'grid'
                ? 'grid grid-cols-1 gap-6 sm:grid-cols-2'
                : 'space-y-4'
            "
          >
            <div
              v-for="article in paginatedArticles"
              :key="article.id"
              class="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
              :class="viewMode === 'list' ? 'flex' : ''"
            >
              <ArticleCard :article="article" :viewMode="viewMode" />
            </div>
          </div>

          <!-- Pagination -->
          <div
            class="mt-8 flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm dark:bg-gray-800"
          >
            <div class="flex flex-1 justify-between sm:hidden">
              <button
                @click="currentPage--"
                :disabled="currentPage === 1"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                :class="{
                  'cursor-not-allowed opacity-50': currentPage === 1,
                  'cursor-pointer': currentPage !== 1,
                }"
              >
                Précédent
              </button>
              <button
                @click="currentPage++"
                :disabled="currentPage >= totalPages"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                :class="{
                  'cursor-not-allowed opacity-50': currentPage >= totalPages,
                  'cursor-pointer': currentPage < totalPages,
                }"
              >
                Suivant
              </button>
            </div>
            <div
              class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"
            >
              <div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  <span class="font-medium">{{
                    (currentPage - 1) * itemsPerPage + 1
                  }}</span>
                  à
                  <span class="font-medium">{{
                    Math.min(
                      currentPage * itemsPerPage,
                      filteredArticles.length,
                    )
                  }}</span>
                  sur
                  <span class="font-medium">{{ filteredArticles.length }}</span>
                </p>
              </div>
              <div>
                <nav
                  class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    @click="currentPage--"
                    :disabled="currentPage === 1"
                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-700 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-400 dark:ring-gray-500 dark:hover:bg-gray-700"
                    :class="{
                      'cursor-not-allowed opacity-50': currentPage === 1,
                      'cursor-pointer': currentPage !== 1,
                    }"
                  >
                    <span class="sr-only">Précédent</span>

                    <Icon name="ri:arrow-left-s-line" size="1.3em" class="" />
                  </button>
                  <button
                    v-for="page in displayedPages"
                    :key="page"
                    @click="currentPage = page"
                    class="cursor-pointer"
                    :class="[
                      currentPage === page
                        ? 'relative z-10 inline-flex items-center bg-gray-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-gray-300 ring-inset focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:ring-gray-500'
                        : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-300 dark:ring-gray-500 dark:hover:bg-gray-700',
                    ]"
                  >
                    {{ page }}
                  </button>
                  <button
                    @click="currentPage++"
                    :disabled="currentPage >= totalPages"
                    class="relative inline-flex cursor-pointer items-center rounded-r-md px-2 py-2 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-300 dark:ring-gray-500 dark:hover:bg-gray-700"
                    :class="{
                      'cursor-not-allowed opacity-50':
                        currentPage >= totalPages,
                    }"
                  >
                    <span class="sr-only">Suivant</span>
                    <Icon name="ri:arrow-right-s-line" size="1.3em" class="" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useActiveElement, useMagicKeys, whenever } from "@vueuse/core";
import { logicAnd } from "@vueuse/math";

type ViewType = "grid" | "list";

type Article = {
  id: string;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
  datetime: string;
  tags: string[];
  readingTime: string;
  author: {
    name: string;
    imageUrl: string;
  };
};

// View mode (grid/list)
const viewMode = ref<ViewType>("grid");

// Filters
const searchQuery = ref("");
const selectedTags = ref<string[]>([]);
const sortBy = ref("like");
const minStars = ref(0);

// Pagination
const currentPage = ref(1);
const itemsPerPage = 8;

// Sample articles data
const articles = ref<Article[]>([
  {
    id: "1",
    title: "Server Components in Nuxt 3: A Practical Guide",
    href: "/sample-article",
    description:
      "Explore the power of server components in Nuxt 3 and how they can improve your application performance.",
    imageUrl:
      "https://images.unsplash.com/photo-1587620931276-d97f425f62b9?auto=format&fit=crop&w=2064&q=80",
    date: "Mar 8, 2025",
    datetime: "2025-03-08",
    tags: ["Nuxt", "Performance"],
    readingTime: "9 min",
    author: {
      name: "Michael Chen",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "2",
    title: "Mastering GraphQL: From Basics to Advanced",
    href: "/sample-article",
    description:
      "A comprehensive guide to GraphQL, covering everything from queries and mutations to advanced schema design.",
    imageUrl:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=2070&q=80",
    date: "Mar 1, 2025",
    datetime: "2025-03-01",
    tags: ["GraphQL", "API", "Backend"],
    readingTime: "10 min",
    author: {
      name: "John Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "3",
    title: "Exploring the Future of Web Development with SvelteKit",
    href: "/sample-article",
    description:
      "An in-depth look at SvelteKit and its potential to revolutionize web development with its innovative approach.",
    imageUrl:
      "https://images.unsplash.com/photo-1577648188599-291bb8b831c3?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 27, 2025",
    datetime: "2025-02-27",
    tags: ["Svelte", "Web Development", "Innovation"],
    readingTime: "7 min",
    author: {
      name: "Linda Brown",
      imageUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "4",
    title: "La nouvelle économie du Web décentralisé",
    href: "/sample-article",
    description:
      "Analyse de la transition vers une nouvelle économie numérique, portée par les technologies décentralisées du Web 3.0.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 10, 2025",
    datetime: "2025-02-10",
    tags: ["Nouvelle économie", "Web décentralisé"],
    readingTime: "8 min",
    author: {
      name: "David Leroy",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "5",
    title: "Les tendances du développement web en 2025",
    href: "/sample-article",
    description:
      "Un aperçu des technologies et pratiques qui façonnent le développement web en 2025.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 5, 2025",
    datetime: "2025-02-05",
    tags: ["Tendances", "Développement web"],
    readingTime: "7 min",
    author: {
      name: "Sophie Tremblay",
      imageUrl:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "6",
    title: "L'impact de l'intelligence artificielle sur le développement web",
    href: "/sample-article",
    description:
      "Comment l'IA transforme les méthodes et outils utilisés dans le développement web moderne.",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2070&q=80",
    date: "Jan 30, 2025",
    datetime: "2025-01-30",
    tags: ["Intelligence artificielle", "Développement web"],
    readingTime: "9 min",
    author: {
      name: "Karim Ben Saïd",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "7",
    title: "Refonte de mon blog avec Nuxt.js et Tailwind CSS - Partie 1",
    href: "/sample-article",
    description:
      "Découvrez le processus de refonte d'un blog en utilisant Nuxt.js et Tailwind CSS dans cette première partie.",
    imageUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 20, 2025",
    datetime: "2025-02-20",
    tags: ["Nuxt.js", "Tailwind CSS", "Refonte"],
    readingTime: "12 min",
    author: {
      name: "Jefry Dewangga",
      imageUrl:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "8",
    title: "Construire un blog avec Nuxt.js et Tailwind CSS",
    href: "/sample-article",
    description:
      "Un guide étape par étape pour créer un blog en utilisant Nuxt.js et Tailwind CSS.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80",
    date: "Mar 1, 2025",
    datetime: "2025-03-01",
    tags: ["Nuxt.js", "Tailwind CSS", "Blog"],
    readingTime: "10 min",
    author: {
      name: "Sachin Ghait",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "9",
    title: "Intégration de MongoDB et Mongoose avec Nuxt 3",
    href: "/sample-article",
    description:
      "Apprenez comment intégrer MongoDB et Mongoose dans une application Nuxt 3 pour une gestion efficace des données.",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 28, 2025",
    datetime: "2025-02-28",
    tags: ["Nuxt 3", "MongoDB", "Mongoose"],
    readingTime: "8 min",
    author: {
      name: "Jahid Anowar",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "10",
    title: "Introduction à React 18 : Les nouveautés",
    href: "/sample-article",
    description:
      "Découvrez les nouvelles fonctionnalités de React 18 et comment les utiliser dans vos projets.",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=2070&q=80",
    date: "Mar 3, 2025",
    datetime: "2025-03-03",
    tags: ["React", "JavaScript"],
    readingTime: "8 min",
    author: {
      name: "Jean Dupont",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "11",
    title: "Optimizing SEO in Next.js Applications",
    href: "/sample-article",
    description:
      "Learn how to optimize your Next.js applications for search engines with practical tips and techniques.",
    imageUrl:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 28, 2025",
    datetime: "2025-02-28",
    tags: ["Next.js", "SEO"],
    readingTime: "10 min",
    author: {
      name: "Laura Smith",
      imageUrl:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "12",
    title: "Les bases de GraphQL : Un guide complet",
    href: "/sample-article",
    description:
      "Apprenez les concepts de base de GraphQL et comment l'intégrer dans vos applications modernes.",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2069&q=80",
    date: "Feb 25, 2025",
    datetime: "2025-02-25",
    tags: ["GraphQL", "API"],
    readingTime: "12 min",
    author: {
      name: "Marie Martin",
      imageUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "13",
    title: "Mastering State Management with Pinia in Vue 3",
    href: "/sample-article",
    description:
      "A comprehensive guide to mastering state management using Pinia in Vue 3 applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 22, 2025",
    datetime: "2025-02-22",
    tags: ["Vue", "State Management"],
    readingTime: "11 min",
    author: {
      name: "David Wilson",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "14",
    title: "Introduction à Docker pour les développeurs",
    href: "/sample-article",
    description:
      "Découvrez comment Docker peut simplifier le développement et le déploiement de vos applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 20, 2025",
    datetime: "2025-02-20",
    tags: ["Docker", "DevOps"],
    readingTime: "14 min",
    author: {
      name: "Pierre Lefevre",
      imageUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "15",
    title: "Building Real-Time Apps with WebSockets",
    href: "/sample-article",
    description:
      "Learn how to build real-time applications using WebSockets and Node.js.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 18, 2025",
    datetime: "2025-02-18",
    tags: ["WebSockets", "Node.js"],
    readingTime: "9 min",
    author: {
      name: "John Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "16",
    title: "Les meilleures pratiques pour le développement mobile avec Flutter",
    href: "/sample-article",
    description:
      "Découvrez les meilleures pratiques pour développer des applications mobiles performantes avec Flutter.",
    imageUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 15, 2025",
    datetime: "2025-02-15",
    tags: ["Flutter", "Mobile"],
    readingTime: "13 min",
    author: {
      name: "Sophie Bernard",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "17",
    title: "Advanced CSS Animations with Tailwind CSS",
    href: "/sample-article",
    description:
      "Take your CSS animations to the next level using Tailwind CSS and modern techniques.",
    imageUrl:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 12, 2025",
    datetime: "2025-02-12",
    tags: ["CSS", "Animations"],
    readingTime: "8 min",
    author: {
      name: "Anna Taylor",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "18",
    title: "Introduction à l'accessibilité web",
    href: "/sample-article",
    description:
      "Apprenez les bases de l'accessibilité web et comment rendre vos sites accessibles à tous.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 10, 2025",
    datetime: "2025-02-10",
    tags: ["Accessibilité", "Web"],
    readingTime: "10 min",
    author: {
      name: "Lucie Petit",
      imageUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "19",
    title: "Building Scalable APIs with NestJS",
    href: "/sample-article",
    description:
      "Learn how to build scalable and maintainable APIs using NestJS and TypeScript.",
    imageUrl:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 8, 2025",
    datetime: "2025-02-08",
    tags: ["NestJS", "API"],
    readingTime: "11 min",
    author: {
      name: "Robert Brown",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "20",
    title: "Les avantages de l'utilisation de TypeScript en 2025",
    href: "/sample-article",
    description:
      "Découvrez pourquoi TypeScript est devenu un outil incontournable pour les développeurs modernes.",
    imageUrl:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 5, 2025",
    datetime: "2025-02-05",
    tags: ["TypeScript", "JavaScript"],
    readingTime: "7 min",
    author: {
      name: "Thomas Leroy",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "21",
    title: "Getting Started with SvelteKit",
    href: "/sample-article",
    description:
      "A beginner's guide to building modern web applications with SvelteKit.",
    imageUrl:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 3, 2025",
    datetime: "2025-02-03",
    tags: ["SvelteKit", "JavaScript"],
    readingTime: "9 min",
    author: {
      name: "Emma Watson",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "22",
    title: "Les fondamentaux de la cybersécurité pour les développeurs",
    href: "/sample-article",
    description:
      "Apprenez les bases de la cybersécurité et comment protéger vos applications des menaces courantes.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2070&q=80",
    date: "Feb 1, 2025",
    datetime: "2025-02-01",
    tags: ["Cybersécurité", "Développement"],
    readingTime: "12 min",
    author: {
      name: "Julien Moreau",
      imageUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "23",
    title: "Building Microfrontends with Module Federation",
    href: "/sample-article",
    description:
      "Learn how to build scalable and maintainable microfrontends using Module Federation in Webpack.",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2069&q=80",
    date: "Jan 29, 2025",
    datetime: "2025-01-29",
    tags: ["Microfrontends", "Webpack"],
    readingTime: "10 min",
    author: {
      name: "Daniel Lee",
      imageUrl:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "24",
    title: "Les meilleurs outils pour les développeurs en 2025",
    href: "/sample-article",
    description:
      "Découvrez les outils essentiels pour les développeurs en 2025 et comment ils peuvent booster votre productivité.",
    imageUrl:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=2070&q=80",
    date: "Jan 27, 2025",
    datetime: "2025-01-27",
    tags: ["Outils", "Productivité"],
    readingTime: "8 min",
    author: {
      name: "Camille Dubois",
      imageUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "25",
    title: "Mastering GraphQL Subscriptions",
    href: "/sample-article",
    description:
      "Learn how to implement real-time features in your applications using GraphQL subscriptions.",
    imageUrl:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=2070&q=80",
    date: "Jan 25, 2025",
    datetime: "2025-01-25",
    tags: ["GraphQL", "Real-Time"],
    readingTime: "11 min",
    author: {
      name: "Sophia Martinez",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
]);

// Computed properties
const tags = computed(() => {
  if (articles.value.length === 0) {
    return [];
  }
  return [...new Set(articles.value.map((art) => art.tags))];
});

const uniqueTags = computed(() => {
  if (tags.value.length === 0) {
    return [];
  }
  return [...new Set(tags.value.flat())].slice(-10);
});

const filteredArticles = computed(() => {
  let result = articles.value;

  if (result.length === 0) {
    return [];
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query),
    );
  }

  // Filter by categories
  if (selectedTags.value.length > 0) {
    result = result.filter((article) =>
      selectedTags.value.includes(article.tags[0]),
    );
  }

  // Sort
  result = [...result].sort((a, b) => {
    switch (sortBy.value) {
      case "title":
        return a.title.localeCompare(b.title);
      case "recent":
        return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
      default:
        return 0;
    }
  });

  return result;
});

// Pagination
const totalPages = computed(() =>
  Math.ceil(filteredArticles.value.length / itemsPerPage),
);

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredArticles.value.slice(start, end);
});

const displayedPages = computed(() => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let l: number;

  for (let i = 1; i <= totalPages.value; i++) {
    if (
      i === 1 ||
      i === totalPages.value ||
      (i >= currentPage.value - delta && i <= currentPage.value + delta)
    ) {
      range.push(i);
    }
  }

  range.forEach((i) => {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  });

  return range;
});

// Watch for filter changes to reset pagination
watch([searchQuery, selectedTags, minStars, sortBy], () => {
  currentPage.value = 1;
});

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
</script>
