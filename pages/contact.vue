<template>
  <main class="container mx-auto px-4 py-12 sm:px-6 md:w-9/12 md:max-w-5xl">
    <!-- Hero Section -->
    <div class="mb-16 text-center">
      <h1
        class="text-decoration-primary text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl"
      >
        Get in Touch
      </h1>
      <p
        class="mx-auto mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
        v-animate-on-scroll
      >
        Have a question or want to collaborate? We'd love to hear from you.
      </p>
    </div>

    <div class="grid gap-12 md:grid-cols-2">
      <!-- Contact Information -->
      <div>
        <div class="mb-8 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <h2 class="mb-6 text-2xl font-bold">Contact Informations</h2>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100/75 dark:bg-secondary-100/15"
                >
                  <Icon
                    name="ri:map-pin-line"
                    size="1.5em"
                    class="text-secondary-500 dark:text-secondary-400"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium">Africa</h3>
                <p class="mt-1 text-gray-600 dark:text-gray-300">
                  10+ Countries
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100/75 dark:bg-secondary-100/15"
                >
                  <Icon
                    name="ri:telegram-line"
                    size="1.5em"
                    class="text-secondary-500 dark:text-secondary-400"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium">Telegram</h3>
                <p class="mt-1 text-gray-600 dark:text-gray-300">
                  <AppLink class="" to="https://t.me/devs_forum" target="_blank"
                    >Les developpeurs</AppLink
                  >
                </p>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  1500+ Members
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100/75 dark:bg-secondary-100/15"
                >
                  <Icon
                    name="ri:mail-line"
                    size="1.5em"
                    class="text-secondary-500 dark:text-secondary-400"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium">Email</h3>
                <p class="mt-1 text-gray-600 dark:text-gray-300">
                  contact@domain.com
                </p>
                <p
                  class="mt-1 text-sm text-gray-500 dark:text-gray-400"
                  v-animate-on-scroll
                >
                  We'll respond within 24-72 hours
                </p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-8 border-t pt-8 dark:border-gray-700">
            <h3 class="mb-4 text-lg font-medium">Follow Us</h3>
            <div class="flex space-x-4">
              <AppLink
                to="https://t.me/devs_forum"
                class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
              >
                <Icon name="ri:telegram-fill" size="1.2em" />
              </AppLink>
              <AppLink
                to="https://github.com/af-devs"
                class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
              >
                <Icon name="ri:github-fill" size="1.2em" />
              </AppLink>
              <AppLink
                to="#"
                class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
              >
                <Icon name="ri:twitter-x-fill" size="1.2em" />
              </AppLink>
              <AppLink
                to="#"
                class="text-gray-600 transition-colors hover:text-custom-blue dark:text-gray-400 dark:hover:text-primary-400"
              >
                <Icon name="ri:linkedin-box-fill" size="1.2em" />
              </AppLink>
            </div>
          </div>
        </div>

        <!-- Telegram Group Showcase -->
        <div
          class="rounded-xl border border-gray-200 bg-white/80 p-6 text-center shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <NuxtImg
            class="mx-auto mb-4 flex h-28 w-28 self-center rounded-full"
            src="/images/tg-avatar.jpg"
            alt="Telegram group profil image"
            placeholder="/images/placeholder.svg"
          />
          <h3 class="mb-2 text-xl font-bold text-gray-700 dark:text-gray-300">
            Les developpeurs
          </h3>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            1 833 members
          </p>
          <p class="text-gray-600 dark:text-gray-300">
            La communauté tech et développeurs d'Afrique et du monde ✨
          </p>
          <AppLink
            to="https://t.me/devs_forum"
            class="mt-3 inline-block rounded-lg border border-primary/60 px-2 py-0.5 text-primary-700 hover:border-primary hover:text-primary-900 dark:border-primary/60 dark:text-primary-400 dark:hover:text-primary-100"
            >Rejoignez-nous sur Telegram</AppLink
          >
        </div>

        <!-- Map -->
        <!-- TODO: Remove this if not relevant-->
        <div
          v-if="false"
          class="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0927348461657!2d-122.39663492361191!3d37.78779971583655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c31%3A0x3f10558c2a680820!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1709771234567!5m2!1sen!2sus"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="grayscale dark:invert"
          ></iframe>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
        <h2 class="mb-6 text-2xl font-bold">Send us a Message</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label
              for="name"
              class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
            />
          </div>

          <div v-animate-on-scroll>
            <label
              for="email"
              class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
            />
          </div>

          <div v-animate-on-scroll>
            <label
              for="subject"
              class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
            />
          </div>

          <div v-animate-on-scroll>
            <label
              for="message"
              class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              required
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
            ></textarea>
          </div>

          <div v-animate-on-scroll>
            <button
              type="submit"
              class="flex w-full items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-white transition-colors duration-[var(--transition-duration-x2)] hover:shadow hover:shadow-gray-500 dark:bg-primary-800/50"
              :disabled="isSubmitting"
            >
              <Icon
                v-if="isSubmitting"
                name="ri:loader-4-line"
                class="animate-spin"
              />
              <span class="ml-2">{{
                isSubmitting ? "Sending..." : "Send Message"
              }}</span>
            </button>
          </div>
        </form>

        <!-- FAQ Preview -->
        <div class="mt-8 border-t border-gray-300 pt-8 dark:border-gray-700">
          <h3 class="mb-4 text-lg font-medium">Frequently Asked Questions</h3>
          <div class="space-y-4">
            <details class="group" v-animate-on-scroll>
              <summary class="flex cursor-pointer items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300"
                  >How quickly do you respond to messages?</span
                >
                <Icon
                  name="ri:arrow-down-s-line"
                  class="h-5 w-5 transition-transform group-open:rotate-180"
                />
              </summary>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                We typically respond to all inquiries within 24-48 hours during
                business days.
              </p>
            </details>
            <details class="group" v-animate-on-scroll>
              <summary class="flex cursor-pointer items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300"
                  >Do you offer technical support?</span
                >
                <Icon
                  name="ri:arrow-down-s-line"
                  class="h-5 w-5 transition-transform group-open:rotate-180"
                />
              </summary>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                Yes, we provide technical support to our community members
                through our dedicated support channels.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Define route name and set route path
definePageMeta({
  name: "contact",
  path: "/contact",
});

const isSubmitting = ref(false);
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", form);

    // Reset form
    Object.assign(form, {
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
