<template>
  <!-- Contact Section -->
  <section id="contact">
      <div class="container md:w-9/12 mx-auto px-4 flex flex-col md:flex-row items-center" v-animate-on-scroll>
          <div class="md:w-1/2 mb-8 md:mb-0">
              <img src="~/assets/img/contact.svg" alt="Contactez-nous" class="w-full max-w-md mx-auto">
          </div>
          <div class="md:w-1/2 p-12 border border-gray-100 dark:border-gray-50/10 rounded-lg shadow-md">
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gradient-p-to-s transition-transform hover:scale-x-102 origin-left duration-100">Contactez-nous</h2>
              <form action="#" method="POST" class="space-y-4">
                  <div>
                      <label for="name" class="block mb-2">Votre nom</label>
                      <input type="text" id="name" name="name" required class="w-full px-4 py-2 rounded-md border border-secondary-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary">
                  </div>
                  <div>
                      <label for="email" class="block mb-2">Votre email</label>
                      <input type="email" id="email" name="email" required class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary">
                  </div>
                  <div>
                      <label for="message" class="block mb-2">Votre message</label>
                      <textarea id="message" name="message" rows="5" required class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
                  </div>
                  <button type="submit" class="cursor-pointer w-full btn-hover-gradient font-bold py-3 px-6">Envoyer le message</button>
              </form>
          </div>
      </div>
  </section>
</template>
