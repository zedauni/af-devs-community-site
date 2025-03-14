<template>
  <main>
    <!-- Article Header -->
    <div class="relative">
      <div class="absolute inset-0">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=3603&q=80"
          alt="Featured image"
        />
        <div
          class="absolute inset-0 bg-gray-600 mix-blend-multiply"
          aria-hidden="true"
        ></div>
      </div>
      <div
        class="relative container mx-auto px-4 py-24 sm:px-6 sm:py-32 md:w-9/12"
      >
        <div class="max-w-3xl">
          <div class="mb-4 flex flex-wrap gap-2">
            <span
              class="inline-flex items-center rounded-full bg-primary-100 px-3 py-0.5 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"
            >
              Technology
            </span>
            <span
              class="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
            >
              Design
            </span>
          </div>
          <h1
            class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Creating Beautiful Interfaces with Tailwind CSS and Nuxt 3
          </h1>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&clothingColor=fdea6b&backgroundColor=e78276&head=bun"
                alt="Author"
              />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">
                <a href="#" class="hover:underline">Jane Doe</a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-300">
                <time datetime="2025-03-16">Mar 16, 2025</time>
                <span aria-hidden="true">&middot;</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Article Content -->
    <div class="container mx-auto px-4 sm:px-6 md:w-9/12">
      <div class="mx-auto max-w-3xl">
        <!-- Table of Contents -->
        <div
          class="my-8 rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-700"
        >
          <h2 class="text-lg font-medium text-secondary">Table of Contents</h2>
          <nav class="mt-4">
            <ul class="space-y-2">
              <li>
                <a
                  href="#introduction"
                  class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                  >Introduction</a
                >
              </li>
              <li>
                <a
                  href="#getting-started"
                  class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                  >Getting Started with Tailwind CSS</a
                >
              </li>
              <li>
                <a
                  href="#nuxt-integration"
                  class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                  >Integrating with Nuxt 3</a
                >
              </li>
              <li>
                <a
                  href="#responsive-design"
                  class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                  >Responsive Design Principles</a
                >
              </li>
              <li>
                <a
                  href="#dark-mode"
                  class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                  >Implementing Dark Mode</a
                >
              </li>
              <li>
                <a
                  href="#conclusion"
                  class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                  >Conclusion</a
                >
              </li>
            </ul>
          </nav>
        </div>

        <!-- Article Body -->
        <div class="mx-auto prose prose-lg mt-6 dark:prose-invert">
          <h2 id="introduction">Introduction</h2>
          <p>
            Tailwind CSS has revolutionized the way developers approach styling
            in web applications. Combined with Nuxt 3, it creates a powerful
            toolkit for building modern, responsive, and visually appealing
            interfaces. In this article, we'll explore how to leverage these
            technologies to create beautiful user experiences.
          </p>

          <p>
            The utility-first approach of Tailwind CSS allows for rapid
            development without sacrificing design quality. By composing small,
            single-purpose utility classes, developers can build complex
            components without writing custom CSS.
          </p>

          <blockquote>
            <p>
              "Tailwind CSS is the only framework that I've seen scale on large
              teams. It's easy to customize, adapts to any design, and the build
              size is tiny."
            </p>
            <cite>— Sarah Dayan, Staff Engineer at Algolia</cite>
          </blockquote>

          <!-- Call to Action - Read Also -->
          <div
            class="not-prose my-8 rounded-lg border-l-4 border-primary-500 bg-primary-50 p-4 dark:bg-primary-900/40"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <Icon
                  name="ri:information-2-line"
                  size="1.3em"
                  class="text-primary-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3">
                <h3 class="my-0 text-sm font-medium text-secondary">
                  Read Also
                </h3>
                <div
                  class="mt-2 text-sm text-primary-700 dark:text-primary-200"
                >
                  <p>
                    <a
                      href="#"
                      class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      10 Tailwind CSS Tips and Tricks Every Developer Should
                      Know
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 id="getting-started">Getting Started with Tailwind CSS</h2>
          <p>
            Setting up Tailwind CSS in your article is straightforward. First,
            install the necessary dependencies:
          </p>

          <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init</code></pre>

          <p>
            Then, configure your tailwind.config.js file to include the paths to
            all of your template files:
          </p>

          <pre><code>module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>

          <h2 id="nuxt-integration">Integrating with Nuxt 3</h2>
          <p>
            Nuxt 3 provides a modern framework for building Vue applications
            with improved performance and developer experience. Integrating
            Tailwind CSS with Nuxt 3 is simple using the official module:
          </p>

          <pre><code>npm install -D @nuxtjs/tailwindcss</code></pre>

          <p>Then add it to your modules in nuxt.config.ts:</p>

          <pre><code>export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})</code></pre>

          <!-- You Might Also Like -->
          <div
            class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800"
          >
            <h3 class="m-0 text-lg font-medium text-secondary">
              You Might Also Like
            </h3>
            <div class="mt-6 space-y-4">
              <ArticleCard
                v-for="article in relatedArticles.slice(-1)"
                :key="article.id"
                :article="article"
                viewMode="list"
              />
            </div>
          </div>

          <h2 id="responsive-design">Responsive Design Principles</h2>
          <p>
            Tailwind CSS makes responsive design intuitive with its mobile-first
            approach. By using responsive modifiers like
            <code>sm:</code>, <code>md:</code>, <code>lg:</code>, and
            <code>xl:</code>, you can apply styles at specific breakpoints:
          </p>

          <pre><code>&lt;div class="text-sm sm:text-base md:text-lg lg:text-xl"&gt;
  Responsive text that changes size based on screen width
&lt;/div&gt;</code></pre>

          <p>
            This approach allows you to build interfaces that adapt seamlessly
            to different screen sizes without writing media queries.
          </p>

          <h2 id="dark-mode">Implementing Dark Mode</h2>
          <p>
            Tailwind CSS makes implementing dark mode straightforward. First,
            configure your tailwind.config.js to use the 'class' strategy:
          </p>

          <pre><code>module.exports = {
  darkMode: 'class',
  // ...
}</code></pre>

          <p>
            Then, use dark mode variants to specify different styles for dark
            mode:
          </p>

          <pre><code>&lt;div class="bg-white text-gray-900 dark:bg-gray-800 dark:text-white"&gt;
  This element adapts to light and dark modes
&lt;/div&gt;</code></pre>

          <h2 id="conclusion">Conclusion</h2>
          <p>
            Combining Tailwind CSS with Nuxt 3 provides a powerful foundation
            for building modern web applications. The utility-first approach of
            Tailwind CSS, coupled with the performance and developer experience
            of Nuxt 3, allows developers to create beautiful, responsive
            interfaces efficiently.
          </p>

          <p>
            By leveraging the techniques discussed in this article, you can
            enhance your development workflow and deliver exceptional user
            experiences across devices and preferences.
          </p>
        </div>

        <!-- Tags -->
        <div class="mt-8 flex items-center">
          <h2
            class="mr-2 py-0.5 text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            Tags&nbsp;:
          </h2>
          <div class="flex flex-wrap gap-2">
            <a
              href="#"
              class="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Tailwind CSS
            </a>
            <a
              href="#"
              class="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Nuxt 3
            </a>
            <a
              href="#"
              class="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              TypeScript
            </a>
            <a
              href="#"
              class="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Web Development
            </a>
            <a
              href="#"
              class="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Frontend
            </a>
          </div>
        </div>

        <!-- Share Buttons -->
        <div class="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
          <ShareButtons
            title="Creating Beautiful Interfaces with Tailwind CSS and Nuxt 3"
          />
        </div>

        <!-- Author Info -->
        <div class="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
          <AuthorCard :author="author" />
        </div>

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
      </div>
    </div>

    <!-- Comments Section -->
    <div class="relative container mx-auto px-4 sm:px-6 md:w-9/12">
      <div class="mx-auto max-w-3xl">
        <CommentSection />
      </div>
    </div>

    <!-- Related Articles -->
    <div class="py-16 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6 md:w-9/12">
        <div class="mx-auto max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-secondary sm:text-4xl"
          >
            Related Articles
          </h2>
          <p
            class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4 dark:text-gray-400"
          >
            Discover more content about development, ai, design, modern
            technologies and more.
          </p>
        </div>
        <div
          class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
        >
          <ArticleCard
            v-for="article in relatedArticles.slice(0, 3)"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ArticleCard } from "#components";
import type { Article } from "~/schema/article";

// Define route name
definePageMeta({
  name: "posts-slug",
});

// Author data
const author = {
  name: "Thomas Smith",
  role: "Senior Frontend Developer",
  bio: "Thomas has been building web applications for over 10 years, specializing in Vue.js, Nuxt, and modern CSS frameworks. He loves sharing knowledge and helping others improve their development skills.",
  avatarUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  socialLinks: [
    {
      name: "Twitter",
      href: "#",
      icon: "TwitterIcon",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "LinkedInIcon",
    },
    {
      name: "Website",
      href: "#",
      icon: "GlobeAltIcon",
    },
  ],
};

// Related articles data
// Get articles from dedicated pinia store
const articleStore = useArticleStore();
const relatedArticles = ref<Article[]>(articleStore.getLatestArticles(4));
</script>
