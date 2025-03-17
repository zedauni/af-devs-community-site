<template>
  <main class="container mx-auto px-4 py-12 sm:px-6 md:w-9/12">
    <!-- Hero Section -->
    <div class="mb-16 text-center">
      <h1
        class="text-decoration-primary text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl"
      >
        Join Our Tech Community
      </h1>
      <p
        class="mx-auto mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
        v-animate-on-scroll
      >
        Connect with fellow creators, share knowledge, and grow together in our
        vibrant community of tech enthusiasts and web actors.
      </p>
    </div>

    <!-- Benefits Grid -->
    <div class="mb-16 grid gap-8 md:grid-cols-3">
      <div
        class="rounded-lg border border-gray-200 bg-white/80 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100/75 dark:bg-secondary-100/15"
        >
          <Icon
            name="ri:team-line"
            size="2em"
            class="text-secondary-500 dark:text-secondary-400"
          />
        </div>
        <h3 class="mb-2 text-xl font-semibold">Network with Experts</h3>
        <p class="text-gray-600 dark:text-gray-300" v-animate-on-scroll>
          Connect with experienced creators, developers and industry
          professionals from africa and around the world.
        </p>
      </div>
      <div
        class="rounded-lg border border-gray-200 bg-white/80 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100/75 dark:bg-secondary-100/15"
        >
          <Icon
            name="ri:book-open-line"
            size="2em"
            class="text-secondary-500 dark:text-secondary-400"
          />
        </div>
        <h3 class="mb-2 text-xl font-semibold">Exclusive Content</h3>
        <p class="text-gray-600 dark:text-gray-300" v-animate-on-scroll>
          Access premium articles, tutorials, and resources available only to
          community members.
        </p>
      </div>
      <div
        class="rounded-lg border border-gray-200 bg-white/80 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100/75 dark:bg-secondary-100/15"
        >
          <Icon
            name="ri:discuss-line"
            size="2em"
            class="text-secondary-500 dark:text-secondary-400"
          />
        </div>
        <h3 class="mb-2 text-xl font-semibold">Discussion Forums</h3>
        <p class="text-gray-600 dark:text-gray-300" v-animate-on-scroll>
          Participate in discussions, ask questions, and share your knowledge
          with the community.
        </p>
      </div>
    </div>

    <!-- Stats -->
    <div
      class="mb-16 rounded-xl border border-gray-300 bg-gray-50 p-8 shadow shadow-secondary-300 hover:shadow-secondary-500 dark:border-secondary-100/50 dark:bg-gray-800/50 dark:shadow-secondary-200/50 dark:hover:shadow-secondary-200"
    >
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div class="text-center">
          <div
            class="mb-2 text-3xl font-bold text-secondary-500 dark:text-secondary-400"
          >
            18K+
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-300">
            Active Members
          </div>
        </div>
        <div class="text-center">
          <div
            class="mb-2 text-3xl font-bold text-secondary-500 dark:text-secondary-400"
          >
            100+
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-300">
            Listed Projects
          </div>
        </div>
        <div class="text-center">
          <div
            class="mb-2 text-3xl font-bold text-secondary-500 dark:text-secondary-400"
          >
            500+
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-300">
            Published Articles
          </div>
        </div>
        <div class="text-center">
          <div
            class="mb-2 text-3xl font-bold text-secondary-500 dark:text-secondary-400"
          >
            10+
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Countries</div>
        </div>
      </div>
    </div>

    <!-- Join Form -->
    <div class="mx-auto rounded-xl p-8 shadow-lg md:max-w-4xl">
      <h2 class="mb-6 text-2xl font-bold">Join the Community</h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <label
              for="firstName"
              class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name
            </label>
            <input
              id="firstName"
              v-model="form.firstName"
              type="text"
              required
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label
              for="lastName"
              class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last Name
            </label>
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              required
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
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
            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div v-animate-on-scroll>
          <label
            for="expertise"
            class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Areas of Expertise
          </label>
          <select
            id="expertise"
            v-model="form.expertise"
            multiple
            required
            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">FullStack Development</option>
            <option value="uiUx">UI/UX Design</option>
            <option value="graphic">Graphic Design</option>
            <option value="mobile">Mobile Development</option>
            <option value="desktop">Desktop Development</option>
            <option value="iot">IOT Development</option>
            <option value="devops">DevOps</option>
            <option value="copywriting">Copywriting</option>
            <option value="data">Data Analyst</option>
            <option value="ai">AI & Machine Learning</option>
            <option value="security">Security</option>
            <option value="security">OS, Kernel, Language Development</option>
          </select>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Hold Ctrl/Cmd to select multiple
          </p>
        </div>

        <div v-animate-on-scroll>
          <label
            for="bio"
            class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Short Bio
          </label>
          <textarea
            id="bio"
            v-model="form.bio"
            rows="4"
            required
            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        <div class="flex items-start" v-animate-on-scroll>
          <div class="flex h-5 items-center">
            <input
              id="terms"
              v-model="form.terms"
              type="checkbox"
              required
              class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
          </div>
          <div class="ml-3">
            <label for="terms" class="text-sm text-gray-700 dark:text-gray-300">
              I agree to the
              <AppLink
                href="#"
                class="text-primary-600 hover:underline dark:text-primary-400"
              >
                Terms of Service
              </AppLink>
              and
              <AppLink
                href="#"
                class="text-primary-600 hover:underline dark:text-primary-400"
              >
                Privacy Policy
              </AppLink>
            </label>
          </div>
        </div>

        <div>
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
              isSubmitting ? "Processing..." : "Join Now"
            }}</span>
          </button>
        </div>
      </form>
    </div>

    <!-- Testimonials -->
    <div class="mt-16">
      <h2 class="mb-8 text-center text-2xl font-bold">What Our Members Say</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <div class="rounded-lg p-6 shadow-lg">
          <div class="mb-4 flex items-center">
            <NuxtImg
              src="https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&backgroundColor=2d2a2e&face=smile&head=bangs"
              alt="John's avatar"
              class="h-12 w-12 rounded-full"
              placeholder="/images/placeholder.svg"
            />
            <div class="ml-4">
              <div class="font-semibold">Afi Santa</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Frontend Developer
              </div>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-300" v-animate-on-scroll>
            "Being part of this community has significantly accelerated my
            professional growth. The knowledge sharing and networking
            opportunities are invaluable."
          </p>
        </div>
        <div class="rounded-lg p-6 shadow-lg">
          <div class="mb-4 flex items-center">
            <NuxtImg
              src="https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka&clip=true&size=256&randomizeIds=false&accessories=glasses&face=smile&clothingColor=fdea6b&backgroundColor=ffcf77&head=bun"
              alt="Sarah's avatar"
              class="h-12 w-12 rounded-full"
              placeholder="/images/placeholder.svg"
            />
            <div class="ml-4">
              <div class="font-semibold">Maurice Kan</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Full Stack Developer
              </div>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-300" v-animate-on-scroll>
            "The quality of content and discussions here is exceptional. I've
            learned so much from other members and made great connections."
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Define route name and set route path
definePageMeta({
  name: "join",
  path: "/join",
});

const isSubmitting = ref(false);
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  expertise: [] as string[],
  bio: "",
  terms: false,
});

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    Object.assign(form, {
      firstName: "",
      lastName: "",
      email: "",
      expertise: [],
      bio: "",
      terms: false,
    });

    // Show success message
    alert("Thank you for joining our community! We'll be in touch soon.");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
