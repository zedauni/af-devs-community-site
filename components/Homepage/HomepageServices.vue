<template>
  <!-- Services Section -->
  <section id="activities">
    <div class="container md:w-9/12 mx-auto px-4" v-animate-on-scroll>
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 -text-gradient-p-to-s text-secondary">
        Nos activités
      </h2>
      <div class="text-center mb-12">
        Nous collaborons sur des projets open-source pour faire de l'Afrique un
        nouveau hub du développement.
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="bg-pale-gray dark:bg-transparent border border-gray-100 dark:border-gray-50/10 hover:border-gray-200 dark:hover:border-gray-50/75 rounded-lg shadow-md text-center p-6 transition-transform hover:-translate-y-2 duration-500"
        >
          <img
            src="~/assets/img/services1.svg"
            alt="Hackathons"
            class="w-full h-68 mx-auto mb-8 rounded hover:scale-105 transition-transform ease-in-out duration-[var(--transition-duration)"
          />
          <h3 class="mb-8 text-xl md:text-2xl font-bold -text-gradient-p-to-s">
            Hackathons
          </h3>
          <p class="mb-8">
            Des compétitions pour résoudre des problèmes avec le développement
            open-source.
          </p>
          <a href="#" class="btn-hover-gradient px-9 py-4">En savoir plus</a>
        </div>
        <div
          class="bg-pale-gray dark:bg-transparent border border-gray-100 dark:border-gray-50/10 hover:border-gray-200 dark:hover:border-gray-50/75 rounded-lg shadow-md text-center p-6 transition-transform hover:-translate-y-2 duration-500"
        >
          <img
            src="~/assets/img/services2.svg"
            alt="Meetups"
            class="w-full h-68 mx-auto mb-8 rounded hover:scale-105 transition-transform ease-in-out duration-[var(--transition-duration)"
          />
          <h3 class="mb-8 text-xl md:text-2xl font-bold -text-gradient-p-to-s">
            Meetups
          </h3>
          <p class="mb-8">
            Des rencontres entre développeurs africains pour échanger et
            collaborer.
          </p>
          <a href="#" class="btn-hover-gradient px-9 py-4">En savoir plus</a>
        </div>
        <div
          class="bg-pale-gray dark:bg-transparent border border-gray-100 dark:border-gray-50/10 hover:border-gray-200 dark:hover:border-gray-50/75 rounded-lg shadow-md text-center p-6 transition-transform hover:-translate-y-2 duration-500"
        >
          <img
            src="~/assets/img/services3.svg"
            alt="Formations"
            class="w-full h-68 mx-auto mb-8 rounded hover:scale-105 transition-transform ease-in-out duration-[var(--transition-duration)"
          />
          <h3 class="mb-8 text-xl md:text-2xl font-bold -text-gradient-p-to-s">
            Formations
          </h3>
          <p class="mb-8">
            Des tutoriels et formations en ligne pour accompagner les
            développeurs.
          </p>
          <a href="#" class="btn-hover-gradient px-9 py-4">Démarrer</a>
        </div>
        <div
          class="bg-pale-gray dark:bg-transparent border border-gray-100 dark:border-gray-50/10 hover:border-gray-200 dark:hover:border-gray-50/75 rounded-lg shadow-md text-center p-6 transition-transform hover:-translate-y-2 duration-500"
        >
          <img
            src="~/assets/img/services4.svg"
            alt="Collaboration Open-Source"
            class="w-full h-68 mx-auto mb-8 rounded hover:scale-105 transition-transform ease-in-out duration-[var(--transition-duration)"
          />
          <h3 class="mb-8 text-xl md:text-2xl font-bold -text-gradient-p-to-s">
            Collaboration Open-Source
          </h3>
          <p class="mb-8">
            Participation à des projets open-source pour encourager
            l'innovation.
          </p>
          <a href="#" class="btn-hover-gradient px-9 py-4">Participer</a>
        </div>
      </div>
    </div>
  </section>
</template>
