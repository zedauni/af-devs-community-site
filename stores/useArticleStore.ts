import { defineStore } from "pinia";
import { ArticleSchema, type Article } from "~/schema/article";
import { TagSchema, type Tag } from "~/schema/tag";

export const useArticleStore = defineStore("articles", {
  state: (): { articles: Article[] } => ({
    articles: [
      {
        id: "1",
        title: "Server Components in Nuxt 3: A Practical Guide",
        href: "/posts/sample-article",
        description:
          "Explore the power of server components in Nuxt 3 and how they can improve your application performance.",
        imageUrl:
          "https://images.unsplash.com/photo-1587620931276-d97f425f62b9?auto=format&fit=crop&w=2064&q=80",
        date: "Mar 8, 2025",
        datetime: "2025-03-08",
        tags: [{ title: "Dev" }, { title: "Nuxt" }, { title: "Performance" }],
        readingTime: "9 min",
        author: {
          name: "Michael Chen",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=bangs",
        },
      },
      {
        id: "2",
        title: "Mastering GraphQL: From Basics to Advanced",
        href: "/posts/sample-article",
        description:
          "A comprehensive guide to GraphQL, covering everything from queries and mutations to advanced schema design.",
        imageUrl:
          "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=2070&q=80",
        date: "Mar 1, 2025",
        datetime: "2025-03-01",
        tags: [
          { title: "Dev" },
          { title: "GraphQL" },
          { title: "API" },
          { title: "Backend" },
        ],
        readingTime: "10 min",
        author: {
          name: "John Doe",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=buns",
        },
      },
      {
        id: "3",
        title: "Exploring the Future of Web Development with SvelteKit",
        href: "/posts/sample-article",
        description:
          "An in-depth look at SvelteKit and its potential to revolutionize web development with its innovative approach.",
        imageUrl:
          "https://images.unsplash.com/photo-1577648188599-291bb8b831c3?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 27, 2025",
        datetime: "2025-02-27",
        tags: [
          { title: "Dev" },
          { title: "Svelte" },
          { title: "Web Development" },
          { title: "Innovation" },
        ],
        readingTime: "7 min",
        author: {
          name: "Linda Brown",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=cornrows",
        },
      },
      {
        id: "4",
        title: "La nouvelle économie du Web décentralisé",
        href: "/posts/sample-article",
        description:
          "Analyse de la transition vers une nouvelle économie numérique, portée par les technologies décentralisées du Web 3.0.",
        imageUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 10, 2025",
        datetime: "2025-02-10",
        tags: [{ title: "Nouvelle économie" }, { title: "Web décentralisé" }],
        readingTime: "8 min",
        author: {
          name: "David Leroy",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=dreads1",
        },
      },
      {
        id: "5",
        title: "Les tendances du développement web en 2025",
        href: "/posts/sample-article",
        description:
          "Un aperçu des technologies et pratiques qui façonnent le développement web en 2025.",
        imageUrl:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 5, 2025",
        datetime: "2025-02-05",
        tags: [
          { title: "Dev" },
          { title: "Tendances" },
          { title: "Développement web" },
        ],
        readingTime: "7 min",
        author: {
          name: "Sophie Tremblay",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=dreads2",
        },
      },
      {
        id: "6",
        title:
          "L'impact de l'intelligence artificielle sur le développement web",
        href: "/posts/sample-article",
        description:
          "Comment l'IA transforme les méthodes et outils utilisés dans le développement web moderne.",
        imageUrl:
          "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2070&q=80",
        date: "Jan 30, 2025",
        datetime: "2025-01-30",
        tags: [
          { title: "Dev" },
          { title: "Intelligence artificielle" },
          { title: "Développement web" },
        ],
        readingTime: "9 min",
        author: {
          name: "Karim Ben Saïd",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=grayBun",
        },
      },
      {
        id: "7",
        title: "Refonte de mon blog avec Nuxt.js et Tailwind CSS - Partie 1",
        href: "/posts/sample-article",
        description:
          "Découvrez le processus de refonte d'un blog en utilisant Nuxt.js et Tailwind CSS dans cette première partie.",
        imageUrl:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 20, 2025",
        datetime: "2025-02-20",
        tags: [
          { title: "Dev" },
          { title: "Nuxt.js" },
          { title: "Tailwind CSS" },
          { title: "Refonte" },
        ],
        readingTime: "12 min",
        author: {
          name: "Jefry Dewangga",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=hatBeanie",
        },
      },
      {
        id: "8",
        title: "Construire un blog avec Nuxt.js et Tailwind CSS",
        href: "/posts/sample-article",
        description:
          "Un guide étape par étape pour créer un blog en utilisant Nuxt.js et Tailwind CSS.",
        imageUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80",
        date: "Mar 1, 2025",
        datetime: "2025-03-01",
        tags: [
          { title: "Dev" },
          { title: "Nuxt.js" },
          { title: "Tailwind CSS" },
          { title: "Blog" },
        ],
        readingTime: "10 min",
        author: {
          name: "Sachin Ghait",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=hijab",
        },
      },
      {
        id: "9",
        title: "Intégration de MongoDB et Mongoose avec Nuxt 3",
        href: "/posts/sample-article",
        description:
          "Apprenez comment intégrer MongoDB et Mongoose dans une application Nuxt 3 pour une gestion efficace des données.",
        imageUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 28, 2025",
        datetime: "2025-02-28",
        tags: [
          { title: "Dev" },
          { title: "Nuxt 3" },
          { title: "MongoDB" },
          { title: "Mongoose" },
        ],
        readingTime: "8 min",
        author: {
          name: "Jahid Anowar",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=hatHip",
        },
      },
      {
        id: "10",
        title: "Introduction à React 18 : Les nouveautés",
        href: "/posts/sample-article",
        description:
          "Découvrez les nouvelles fonctionnalités de React 18 et comment les utiliser dans vos projets.",
        imageUrl:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=2070&q=80",
        date: "Mar 3, 2025",
        datetime: "2025-03-03",
        tags: [{ title: "Dev" }, { title: "React" }, { title: "JavaScript" }],
        readingTime: "8 min",
        author: {
          name: "Jean Dupont",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=hijab",
        },
      },
      {
        id: "11",
        title: "Optimizing SEO in Next.js Applications",
        href: "/posts/sample-article",
        description:
          "Learn how to optimize your Next.js applications for search engines with practical tips and techniques.",
        imageUrl:
          "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 28, 2025",
        datetime: "2025-02-28",
        tags: [{ title: "Dev" }, { title: "Next.js" }, { title: "SEO" }],
        readingTime: "10 min",
        author: {
          name: "Laura Smith",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=long",
        },
      },
      {
        id: "12",
        title: "Les bases de GraphQL : Un guide complet",
        href: "/posts/sample-article",
        description:
          "Apprenez les concepts de base de GraphQL et comment l'intégrer dans vos applications modernes.",
        imageUrl:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2069&q=80",
        date: "Feb 25, 2025",
        datetime: "2025-02-25",
        tags: [{ title: "Dev" }, { title: "GraphQL" }, { title: "API" }],
        readingTime: "12 min",
        author: {
          name: "Marie Martin",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=longAfro",
        },
      },
      {
        id: "13",
        title: "Mastering State Management with Pinia in Vue 3",
        href: "/posts/sample-article",
        description:
          "A comprehensive guide to mastering state management using Pinia in Vue 3 applications.",
        imageUrl:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 22, 2025",
        datetime: "2025-02-22",
        tags: [
          { title: "Dev" },
          { title: "Vue" },
          { title: "State Management" },
        ],
        readingTime: "11 min",
        author: {
          name: "David Wilson",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=longCurly",
        },
      },
      {
        id: "14",
        title: "Introduction à Docker pour les développeurs",
        href: "/posts/sample-article",
        description:
          "Découvrez comment Docker peut simplifier le développement et le déploiement de vos applications.",
        imageUrl:
          "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 20, 2025",
        datetime: "2025-02-20",
        tags: [{ title: "Dev" }, { title: "Docker" }, { title: "DevOps" }],
        readingTime: "14 min",
        author: {
          name: "Pierre Lefevre",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&head=medium2",
        },
      },
      {
        id: "15",
        title: "Building Real-Time Apps with WebSockets",
        href: "/posts/sample-article",
        description:
          "Learn how to build real-time applications using WebSockets and Node.js.",
        imageUrl:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 18, 2025",
        datetime: "2025-02-18",
        tags: [{ title: "Dev" }, { title: "WebSockets" }, { title: "Node.js" }],
        readingTime: "9 min",
        author: {
          name: "John Doe",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&clothingColor=8fa7df&head=hijab",
        },
      },
      {
        id: "16",
        title:
          "Les meilleures pratiques pour le développement mobile avec Flutter",
        href: "/posts/sample-article",
        description:
          "Découvrez les meilleures pratiques pour développer des applications mobiles performantes avec Flutter.",
        imageUrl:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 15, 2025",
        datetime: "2025-02-15",
        tags: [{ title: "Dev" }, { title: "Flutter" }, { title: "Mobile" }],
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
        href: "/posts/sample-article",
        description:
          "Take your CSS animations to the next level using Tailwind CSS and modern techniques.",
        imageUrl:
          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 12, 2025",
        datetime: "2025-02-12",
        tags: [{ title: "Dev" }, { title: "CSS" }, { title: "Animations" }],
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
        href: "/posts/sample-article",
        description:
          "Apprenez les bases de l'accessibilité web et comment rendre vos sites accessibles à tous.",
        imageUrl:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 10, 2025",
        datetime: "2025-02-10",
        tags: [{ title: "Dev" }, { title: "Accessibilité" }, { title: "Web" }],
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
        href: "/posts/sample-article",
        description:
          "Learn how to build scalable and maintainable APIs using NestJS and TypeScript.",
        imageUrl:
          "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 8, 2025",
        datetime: "2025-02-08",
        tags: [{ title: "Dev" }, { title: "NestJS" }, { title: "API" }],
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
        href: "/posts/sample-article",
        description:
          "Découvrez pourquoi TypeScript est devenu un outil incontournable pour les développeurs modernes.",
        imageUrl:
          "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 5, 2025",
        datetime: "2025-02-05",
        tags: [
          { title: "Dev" },
          { title: "TypeScript" },
          { title: "JavaScript" },
        ],
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
        href: "/posts/sample-article",
        description:
          "A beginner's guide to building modern web applications with SvelteKit.",
        imageUrl:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 3, 2025",
        datetime: "2025-02-03",
        tags: [
          { title: "Dev" },
          { title: "SvelteKit" },
          { title: "JavaScript" },
        ],
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
        href: "/posts/sample-article",
        description:
          "Apprenez les bases de la cybersécurité et comment protéger vos applications des menaces courantes.",
        imageUrl:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2070&q=80",
        date: "Feb 1, 2025",
        datetime: "2025-02-01",
        tags: [{ title: "Cybersécurité" }, { title: "Développement" }],
        readingTime: "12 min",
        author: {
          name: "Jane Doe",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&clothingColor=e78276&backgroundColor=8fa7df&head=hijab",
        },
      },
      {
        id: "23",
        title: "Building Microfrontends with Module Federation",
        href: "/posts/sample-article",
        description:
          "Learn how to build scalable and maintainable microfrontends using Module Federation in Webpack.",
        imageUrl:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2069&q=80",
        date: "Jan 29, 2025",
        datetime: "2025-01-29",
        tags: [
          { title: "Dev" },
          { title: "Microfrontends" },
          { title: "Webpack" },
        ],
        readingTime: "10 min",
        author: {
          name: "Jane Doe",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&clothingColor=e279c7&backgroundColor=9ddadb&head=bun",
        },
      },
      {
        id: "24",
        title: "Les meilleurs outils pour les développeurs en 2025",
        href: "/posts/sample-article",
        description:
          "Découvrez les outils essentiels pour les développeurs en 2025 et comment ils peuvent booster votre productivité.",
        imageUrl:
          "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=2070&q=80",
        date: "Jan 27, 2025",
        datetime: "2025-01-27",
        tags: [
          { title: "Dev" },
          { title: "Outils" },
          { title: "Productivité" },
        ],
        readingTime: "8 min",
        author: {
          name: "Jane Doe",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&clothingColor=78e185&backgroundColor=78e185&head=bun2",
        },
      },
      {
        id: "25",
        title: "Mastering GraphQL Subscriptions",
        href: "/posts/sample-article",
        description:
          "Learn how to implement real-time features in your applications using GraphQL subscriptions.",
        imageUrl:
          "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=2070&q=80",
        date: "Jan 25, 2025",
        datetime: "2025-01-25",
        tags: [{ title: "Dev" }, { title: "GraphQL" }, { title: "Real-Time" }],
        readingTime: "11 min",
        author: {
          name: "Jane Doe",
          imageUrl:
            "https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&clothingColor=8fa7df&backgroundColor=e279c7&head=cornrows2",
        },
      },
    ],
  }),

  getters: {
    getArticleById: (state) => (id: string) =>
      state.articles.find((article) => article.id === id),
    getArticleBySlug: (state) => (slug: string) =>
      state.articles.find((article) => article.href === slug),
    getArticlesByTag: (state) => (tag: Tag | string) =>
      state.articles.filter((article) =>
        article.tags
          .map((t) => t.title.toLowerCase())
          .includes(
            TagSchema.safeParse(tag).success
              ? (tag as Tag).title.toLowerCase()
              : (tag as string).toLowerCase(),
          ),
      ),
    getArticles:
      (state) =>
      (limit: number = 10, offset: number = 0) =>
        state.articles.slice(offset, offset + limit),
    getLatestArticles:
      (state) =>
      (limit: number = 3) =>
        state.articles.slice(-limit),
    getArticlesTags: (state) => (): Tag[] =>
      [
        ...new Map(
          state.articles
            .flatMap((article) => article.tags)
            .map((tag) => [tag.title.toLowerCase(), tag]),
        ).values(),
      ].sort((a, b) => a.title.localeCompare(b.title)),
  },

  actions: {
    addArticle(article: Article) {
      const result = ArticleSchema.safeParse(article);
      if (!result.success) {
        console.error("Validation échouée :", result.error.errors);
        return;
      }
      this.articles.push(result.data);
    },

    removeArticle(id: string) {
      this.articles = this.articles.filter((article) => article.id !== id);
    },
    updateArticle(updatedArticle: Article) {
      const index = this.articles.findIndex(
        (article) => article.id === updatedArticle.id,
      );
      if (index !== -1) {
        this.articles[index] = updatedArticle;
      }
    },
  },
});

// Activate Hot Module Replacement (HMR) support
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useArticleStore, import.meta.hot));
}
