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
          <AppLink href="/" class="mb-4 text-2xl font-bold"
            >AF-<span class="text-secondary">DEV</span></AppLink
          >
          <p class="my-4 text-base text-gray-500 dark:text-gray-400">
            Construisons l'avenir tech de l'Afrique ensemble
          </p>
          <div class="flex space-x-4">
            <AppLink
              href="https://t.me/devs_forum"
              class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Icon
                name="ri:telegram-fill"
                size="1.3em"
                class="cursor-pointer"
              />
            </AppLink>
            <AppLink
              href="https://github.com/af-devs"
              class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Icon name="ri:github-fill" size="1.3em" class="cursor-pointer" />
            </AppLink>
            <AppLink
              href="#"
              class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Icon name="ri:twitter-fill" size="1.3em" class="cursor-pointer"
            /></AppLink>
            <AppLink
              href="#"
              class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Icon name="ri:linkedin-fill" size="1.3em" class="cursor-pointer"
            /></AppLink>
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
                  <AppLink
                    :to="{ name: 'home' }"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Accueil</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    href="#activities"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Nos Activités</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    :to="{ name: 'posts' }"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Blog</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Catalogue</AppLink
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
                  <AppLink
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Question-Réponses</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Tutoriels</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Outils</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Offres d'emploi</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >FAQ</AppLink
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
                  <AppLink
                    :to="{ name: 'join' }"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >À propos</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    :to="{ name: 'join' }"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Rejoindre</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    href="#"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Partenaires</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    href="https://t.me/devs_forum"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Groupe Telegram</AppLink
                  >
                </li>
                <li>
                  <AppLink
                    :to="{ name: 'contact' }"
                    class="hover:text-dark-900 text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-white"
                    >Contact</AppLink
                  >
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <div class="w-full">
                <NuxtImg
                  src="https://placehold.co/250x250/e84d4d/white?text=Ads&grayscale&font=playfair-display"
                  alt="Ads in footer"
                  class="inset-0"
                  placeholder="/images/placeholder.svg"
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
          <AppLink
            :to="{ name: 'contact' }"
            class="mr-4 text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >Revendication</AppLink
          >
          <AppLink
            href="#"
            class="mr-4 text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >Confidentialité</AppLink
          >
          <AppLink
            href="#"
            class="text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >CGU</AppLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = computed((): number => new Date().getFullYear());
</script>
