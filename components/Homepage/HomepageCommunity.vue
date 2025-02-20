<template>
  <!-- Community Section -->
  <section id="community" class="bg-gray-50 dark:bg-gray-800 py-14">
    <div
      class="container md:w-9/12 mx-auto space-x-14 px-4 flex flex-col md:flex-row items-center"
      v-animate-on-scroll
    >
      <div class="md:w-1/2 mb-8 md:mb-0 home-img">
        <img
          src="~/assets/img/community.svg"
          alt="Communauté AF-DEV"
          class="w-full max-w-md mx-auto"
        />
      </div>
      <div class="md:w-1/2">
        <div class="">
          <h2
            class="text-3xl md:text-4xl font-bold mb-8 text-gradient-p-to-s underline-hover-effect"
          >
            Rejoindre la Communauté
          </h2>
        </div>
        <p class="mb-6 leading-loose">
          En rejoignant AF-DEV, vous bénéficiez de nombreux avantages pour
          booster votre carrière de développeur :
        </p>
        <ul class="mb-8 space-y-4">
          <li class="flex items-center transition-transform hover:translate-x-2 duration-100">
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="text-secondary mr-2"
            />
            Accès à des ressources exclusives et tutoriels
          </li>
          <li class="flex items-center transition-transform hover:translate-x-2 duration-100">
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="text-secondary mr-2"
            />
            Réseautage avec des développeurs talentueux à travers l'Afrique
          </li>
          <li class="flex items-center transition-transform hover:translate-x-2 duration-100">
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="text-secondary mr-2"
            />
            Participation à des projets open-source innovants
          </li>
          <li class="flex items-center transition-transform hover:translate-x-2 duration-100">
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="text-secondary mr-2"
            />
            Invitations à des événements et hackathons
          </li>
          <li class="flex items-center transition-transform hover:translate-x-2 duration-100">
            <Icon
              name="ri:arrow-right-double-fill"
              size="1.5em"
              class="text-secondary mr-2"
            />
            Opportunités de collaboration et de mentorat
          </li>
        </ul>
        <div class="flex justify-center md:justify-start">
        <a
          href="https://t.me/devs_forum"
          target="_blank"
          class="hover:bg-primary-dark btn-with-gradient text-pale-gray font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-flex items-center drop-shadow-2xl"
        >
          <div class="flex items-center justify-center mx-auto">
            <Icon name="ri:telegram-line" class="mr-2 text-2xl" />
            <span>Rejoindre sur Telegram</span>
          </div>
        </a></div>
      </div>
    </div>
  </section>
</template>
