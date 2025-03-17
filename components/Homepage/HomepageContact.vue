<template>
  <!-- Contact Section -->
  <section id="contact">
    <div
      class="container mx-auto flex flex-col items-center px-4 md:w-9/12 md:flex-row"
    >
      <div class="mb-8 md:mb-0 md:w-1/2">
        <NuxtImg
          src="/images/contact.svg"
          alt="Contactez-nous"
          class="mx-auto w-full max-w-md"
          placeholder
        />
      </div>
      <div
        class="rounded-lg border border-gray-100 p-12 shadow-md md:w-1/2 dark:border-gray-50/10"
      >
        <h2
          class="mb-6 origin-left text-3xl font-bold text-secondary transition-transform duration-[var(--transition-duration)] hover:scale-x-102 md:text-4xl"
        >
          Contactez-nous
        </h2>
        <form action="#" method="POST" class="space-y-4">
          <div v-animate-on-scroll>
            <label for="name" class="mb-2 block">Votre nom</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full rounded-md border border-custom-blue/30 px-4 py-2 focus:ring-2 focus:ring-custom-blue focus:outline-none dark:border-gray-600"
            />
          </div>
          <div v-animate-on-scroll>
            <label for="email" class="mb-2 block">Votre email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-custom-blue focus:outline-none dark:border-gray-600"
            />
          </div>
          <div v-animate-on-scroll>
            <label for="message" class="mb-2 block">Votre message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              class="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-custom-blue focus:outline-none dark:border-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn-hover-gradient w-full cursor-pointer px-6 py-3 font-bold"
            v-animate-on-scroll
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
