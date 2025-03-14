<template>
  <!-- Footer -->
  <footer
    class="mt-16 border-t border-gray-200 bg-gray-100 pt-16 text-gray-700 dark:border-gray-50/7 dark:bg-[#0e1624] dark:text-white"
  >
    <div class="container mx-auto px-4 md:w-9/12">
      <div
        class="xl:grid xl:grid-cols-3 xl:gap-8"
        class1="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div class="space-y-8 xl:col-span-1">
          <a href="/" class="mb-4 text-2xl font-bold"
            >AF-<span class="text-secondary"
              >DEV</span
            ></a
          >
          <p class="my-4 text-base text-gray-500 dark:text-gray-400">
            Construisons l'avenir tech de l'Afrique ensemble
          </p>
          <div class="flex space-x-4">
            <a
              href="https://t.me/devs_forum"
              class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Icon
                name="ri:telegram-fill"
                size="1.3em"
                class="cursor-pointer"
              />
            </a>
            <a
              href="https://github.com/af-devs"
              class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Icon name="ri:github-fill" size="1.3em" class="cursor-pointer" />
            </a>
            <a
              href="#"
              class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Icon name="ri:twitter-fill" size="1.3em" class="cursor-pointer"
            /></a>
            <a
              href="#"
              class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Icon name="ri:linkedin-fill" size="1.3em" class="cursor-pointer"
            /></a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="">
              <h4 class="mb-4 text-lg font-semibold text-secondary">
                Explorer
              </h4>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Accueil</a
                  >
                </li>
                <li>
                  <a
                    href="#activities"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Nos Activités</a
                  >
                </li>
                <li>
                  <a
                    href="#blog"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Catalogue</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h4 class="mb-4 text-lg font-semibold text-secondary">
                Ressources
              </h4>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Question-Réponses</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Tutoriels</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Outils</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Offres d'emploi</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >FAQ</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="">
              <h4 class="mb-4 text-lg font-semibold text-secondary">
                L'organisation
              </h4>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >À propos</a
                  >
                </li>
                <li>
                  <a
                    href="#community"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Rejoindre</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Partenaires</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Groupe Telegram</a
                  >
                </li>
                <li>
                  <a
                    href="#contact"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <div class="w-full">
                <img
                  src="https://placehold.co/250x250/e84d4d/white?text=Ads&grayscale&font=playfair-display"
                  alt="Ads in footer"
                  class="inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-16 flex flex-col items-center justify-between border-t border-gray-800 py-6 md:flex-row"
      >
        <p class="text-gray-700 dark:text-gray-400">
          &copy; {{ currentYear }} AF-DEVS. Tous droits réservés.
        </p>
        <div
          class="mt-4 flex flex-col items-center justify-between md:mt-0 md:flex-row"
        >
          <a
            href="#"
            class="mr-4 text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >Revendication</a
          >
          <a
            href="#"
            class="mr-4 text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >Confidentialité</a
          >
          <a
            href="#"
            class="text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >CGU</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = computed((): number => new Date().getFullYear());
</script>
