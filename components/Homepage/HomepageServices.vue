<template>
  <!-- Services Section -->
  <section id="activities">
    <div class="container mx-auto px-4 md:w-9/12" v-animate-on-scroll>
      <h2
        class="mb-8 text-center text-3xl font-bold text-secondary md:text-4xl"
      >
        Nos activités
      </h2>
      <div class="mb-12 text-center">
        Nous collaborons sur des projets open-source pour faire de l'Afrique un
        nouveau hub du développement.
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          class="rounded-lg border border-gray-100 bg-pale-gray p-6 text-center shadow-md transition-transform duration-[var(--transition-duration)] hover:-translate-y-2 hover:border-gray-200 dark:border-gray-50/10 dark:bg-transparent dark:hover:border-gray-50/75"
        >
          <img
            src="~/assets/img/services1.svg"
            alt="Hackathons"
            class="duration-[var(--transition-duration)]mx-auto mb-8 h-68 w-full rounded transition-transform ease-in-out hover:scale-105"
          />
          <h3 class="mb-8 text-xl font-bold md:text-2xl">Hackathons</h3>
          <p class="mb-8">
            Des compétitions pour résoudre des problèmes avec le développement
            open-source.
          </p>
          <AppLink :to="{ name: 'join' }" class="btn-hover-gradient px-9 py-4"
            >En savoir plus</AppLink
          >
        </div>
        <div
          class="rounded-lg border border-gray-100 bg-pale-gray p-6 text-center shadow-md transition-transform duration-[var(--transition-duration)] hover:-translate-y-2 hover:border-gray-200 dark:border-gray-50/10 dark:bg-transparent dark:hover:border-gray-50/75"
        >
          <img
            src="~/assets/img/services2.svg"
            alt="Meetups"
            class="duration-[var(--transition-duration)]mx-auto mb-8 h-68 w-full rounded transition-transform ease-in-out hover:scale-105"
          />
          <h3 class="mb-8 text-xl font-bold md:text-2xl">Meetups</h3>
          <p class="mb-8">
            Des rencontres entre développeurs africains pour échanger et
            collaborer.
          </p>
          <AppLink :to="{ name: 'join' }" class="btn-hover-gradient px-9 py-4"
            >En savoir plus</AppLink
          >
        </div>
        <div
          class="rounded-lg border border-gray-100 bg-pale-gray p-6 text-center shadow-md transition-transform duration-[var(--transition-duration)]hover:-translate-y-2 hover:border-gray-200 dark:border-gray-50/10 dark:bg-transparent dark:hover:border-gray-50/75"
        >
          <img
            src="~/assets/img/services3.svg"
            alt="Formations"
            class="duration-[var(--transition-duration)]mx-auto mb-8 h-68 w-full rounded transition-transform ease-in-out hover:scale-105"
          />
          <h3 class="mb-8 text-xl font-bold md:text-2xl">Formations</h3>
          <p class="mb-8">
            Des tutoriels et formations en ligne pour accompagner les
            développeurs.
          </p>
          <AppLink :to="{ name: 'join' }" class="btn-hover-gradient px-9 py-4"
            >Démarrer</AppLink
          >
        </div>
        <div
          class="rounded-lg border border-gray-100 bg-pale-gray p-6 text-center shadow-md transition-transform duration-[var(--transition-duration)]hover:-translate-y-2 hover:border-gray-200 dark:border-gray-50/10 dark:bg-transparent dark:hover:border-gray-50/75"
        >
          <img
            src="~/assets/img/services4.svg"
            alt="Collaboration Open-Source"
            class="duration-[var(--transition-duration)]mx-auto mb-8 h-68 w-full rounded transition-transform ease-in-out hover:scale-105"
          />
          <h3 class="mb-8 text-xl font-bold md:text-2xl">
            Collaboration Open-Source
          </h3>
          <p class="mb-8">
            Participation à des projets open-source pour encourager
            l'innovation.
          </p>
          <AppLink :to="{ name: 'join' }" class="btn-hover-gradient px-9 py-4"
            >Participer</AppLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
