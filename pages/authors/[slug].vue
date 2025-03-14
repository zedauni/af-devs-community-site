<template>
  <main class="container mx-auto px-4 pt-24 pb-12 sm:px-6 md:w-9/12">
    <article>
      <!-- Author Header -->
      <div class="mb-12 flex flex-col items-center gap-8 md:flex-row">
        <img
          src="https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&clothingColor=fdea6b&backgroundColor=ffcf77&head=bun"
          alt="Author avatar"
          class="h-32 w-32 rounded-full border-2 border-secondary object-cover md:h-48 md:w-48"
        />
        <div class="text-center md:text-left">
          <h1
            class="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
          >
            Jane Doe
          </h1>
          <p class="mb-4 text-lg text-gray-600 dark:text-gray-300">
            Senior Technical Writer & Software Developer
          </p>
          <div class="flex flex-wrap justify-center gap-4 md:justify-start">
            <AppLink
              href="https://github.com/af-devs"
              class="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Icon name="ri:github-fill" class="mr-2 h-5 w-5" />
              <span>GitHub</span>
            </AppLink>
            <AppLink
              href="#"
              class="inline-flex items-center rounded-full bg-primary-700 px-4 py-2 text-white transition-colors hover:bg-primary-800"
            >
              <Icon name="ri:twitter-x-fill" class="mr-2 h-5 w-5" />
              <span>Follow</span>
            </AppLink>
            <AppLink
              href="#"
              class="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
              <Icon name="ri:linkedin-box-fill" class="mr-2 h-5 w-5" />
              <span>Connect</span>
            </AppLink>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div
          class="flex items-center justify-center rounded-lg bg-gray-50 p-6 text-center md:flex-col dark:bg-gray-800"
        >
          <Icon
            name="ri:article-line"
            size="1.75em"
            class="mr-4 mb-2 shrink-0 text-primary md:mx-auto"
          />
          <div>
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              26
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Articles</div>
          </div>
        </div>
        <div
          class="flex items-center justify-center rounded-lg bg-gray-50 p-6 text-center md:flex-col dark:bg-gray-800"
        >
          <Icon
            name="ri:user-follow-line"
            size="1.75em"
            class="mr-4 mb-2 shrink-0 text-primary md:mx-auto"
          />
          <div>
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              21.2k
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Followers
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-center rounded-lg bg-gray-50 p-6 text-center md:flex-col dark:bg-gray-800"
        >
          <Icon
            name="ri:heart-line"
            size="1.75em"
            class="mr-4 mb-2 shrink-0 text-primary md:mx-auto"
          />
          <div>
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              450k
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Total Likes
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-center rounded-lg bg-gray-50 p-6 text-center md:flex-col dark:bg-gray-800"
        >
          <Icon
            name="ri:message-3-line"
            size="1.75em"
            class="mr-4 mb-2 shrink-0 text-primary md:mx-auto"
          />
          <div>
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              8.2k
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Comments</div>
          </div>
        </div>
      </div>

      <!-- Author Bio -->
      <div class="prose mb-12 max-w-none dark:prose-invert">
        <h2
          class="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white"
        >
          <Icon name="ri:profile-line" class="mr-2 h-6 w-6" />
          About Me
        </h2>
        <p class="mb-6 text-lg leading-relaxed">
          Hi! I'm John, a passionate writer and developer with over 10 years of
          experience in the tech industry. I specialize in making complex
          technical concepts accessible to everyone through clear, engaging
          content.
        </p>
        <p class="mb-8 text-lg leading-relaxed">
          When I'm not writing or coding, you can find me exploring new
          technologies, contributing to open-source projects, or sharing my
          knowledge through workshops and conference talks.
        </p>

        <!-- Skills -->
        <h3
          class="mb-4 flex items-center text-xl font-bold text-gray-900 dark:text-white"
        >
          <Icon name="ri:tools-line" class="mr-2 h-6 w-6" />
          Expertise
        </h3>
        <div class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div
            class="flex items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          >
            <Icon
              name="ri:reactjs-line"
              class="mr-2 h-6 w-6 text-primary-500"
            />
            <span>React.js</span>
          </div>
          <div
            class="flex items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          >
            <Icon name="ri:vuejs-line" class="mr-2 h-6 w-6 text-primary-500" />
            <span>Vue.js</span>
          </div>
          <div
            class="flex items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          >
            <Icon name="ri:nodejs-line" class="mr-2 h-6 w-6 text-primary-500" />
            <span>Node.js</span>
          </div>
          <div
            class="flex items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          >
            <Icon
              name="ri:database-2-line"
              class="mr-2 h-6 w-6 text-primary-500"
            />
            <span>SQL</span>
          </div>
          <div
            class="flex items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          >
            <Icon name="ri:cloud-line" class="mr-2 h-6 w-6 text-primary-500" />
            <span>AWS</span>
          </div>
          <div
            class="flex items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          >
            <Icon
              name="ri:terminal-box-line"
              class="mr-2 h-6 w-6 text-primary-500"
            />
            <span>DevOps</span>
          </div>
        </div>
      </div>

      <!-- Latest Articles -->
      <section>
        <h2
          class="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-white"
        >
          <Icon name="ri:article-line" class="mr-2 h-6 w-6" />
          Latest Articles
        </h2>
        <!-- Grid/List -->
        <div
          :class="
            viewMode === 'grid'
              ? 'grid grid-cols-1 gap-6 sm:grid-cols-2'
              : 'space-y-4'
          "
        >
          <div
            v-for="article in articles"
            :key="article.id"
            class="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
            :class="viewMode === 'list' ? 'flex' : ''"
          >
            <ArticleCard :article="article" :viewMode="viewMode" />
          </div>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <div
        class="mt-8 flex flex-col rounded-lg bg-primary-50 p-6 md:flex-row md:gap-x-4 dark:bg-primary-900/40"
      >
        <div class="">
          <h2 class="text-xl font-bold tracking-tight">
            Subscribe to our newsletter
          </h2>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Get the latest articles, tutorials, and updates delivered straight
            to your inbox.
          </p>
        </div>
        <form class="mt-4 sm:flex sm:max-w-md sm:items-center">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            autocomplete="email"
            required
            class="w-full min-w-0 appearance-none rounded-md border border-gray-300 px-4 py-2 text-base placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 focus:outline-none sm:max-w-xs dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Enter your email"
          />
          <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit" class="btn btn-primary btn-md w-full">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </article>
  </main>
</template>

<script lang="ts" setup>
import type { Article } from "~/schema/article";

// Define route name
definePageMeta({
  name: "authors-slug",
});

// Get latest articles just for prototyping
const articleStore = useArticleStore();
const articles = ref<Article[]>(articleStore.getLatestArticles(4));

type ViewType = "grid" | "list";

// View mode (grid/list)
const viewMode = ref<ViewType>("list");

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
