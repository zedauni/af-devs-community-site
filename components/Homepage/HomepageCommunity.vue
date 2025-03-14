<template>
  <!-- Community Section -->
  <section id="community" class="bg-gray-50 py-14 dark:bg-gray-800">
    <div
      class="container mx-auto flex flex-col items-center space-x-14 px-4 md:w-9/12 md:flex-row"
      v-animate-on-scroll
    >
      <div class="home-img mb-8 md:mb-0 md:w-1/2">
        <img
          src="~/assets/img/community.svg"
          alt="Communauté AF-DEV"
          class="mx-auto w-full max-w-md"
        />
      </div>
      <div class="md:w-1/2">
        <div class="">
          <h2
            class="underline-hover-effect mb-8 text-3xl font-bold text-secondary md:text-4xl"
          >
            Rejoindre la Communauté
          </h2>
        </div>
        <p class="mb-6 leading-loose">
          En rejoignant AF-DEV, vous bénéficiez de nombreux avantages pour
          booster votre carrière de développeur :
        </p>
        <ul class="mb-8 space-y-4">
          <li
            class="flex items-center transition-transform duration-[var(--transition-duration)] hover:translate-x-2"
          >
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="mr-2 text-custom-blue"
            />
            Accès à des ressources exclusives et tutoriels
          </li>
          <li
            class="flex items-center transition-transform duration-[var(--transition-duration)] hover:translate-x-2"
          >
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="mr-2 text-custom-blue"
            />
            Réseautage avec des développeurs talentueux à travers l'Afrique
          </li>
          <li
            class="flex items-center transition-transform duration-[var(--transition-duration)] hover:translate-x-2"
          >
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="mr-2 text-custom-blue"
            />
            Participation à des projets open-source innovants
          </li>
          <li
            class="flex items-center transition-transform duration-[var(--transition-duration)] hover:translate-x-2"
          >
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="mr-2 text-custom-blue"
            />
            Invitations à des événements et hackathons
          </li>
          <li
            class="flex items-center transition-transform duration-[var(--transition-duration)] hover:translate-x-2"
          >
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="mr-2 text-custom-blue"
            />
            Opportunités de collaboration et de mentorat
          </li>
        </ul>
        <div class="flex justify-center md:justify-start">
          <AppLink
            :to="{ name: 'join' }"
            class="btn-with-gradient inline-flex items-center rounded-full px-6 py-3 font-bold text-pale-gray drop-shadow-2xl transition-colors duration-[var(--transition-duration)] hover:bg-primary-dark"
          >
            <div class="mx-auto flex items-center justify-center">
              <Icon name="ri:group-2-line" class="mr-2 text-2xl" />
              <span>Rejoindre</span>
            </div>
          </AppLink>
        </div>
      </div>
    </div>
  </section>
</template>
