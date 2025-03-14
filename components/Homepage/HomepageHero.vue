<template>
  <!-- Home Section -->
  <section id="home">
    <div
      class="container mx-auto flex flex-col-reverse items-center px-4 md:w-9/12 md:flex-row"
      v-animate-on-scroll="{
        hidden: 'opacity-0 translate-y-0',
        visible: 'opacity-100 translate-y-10',
        transition: 'transition-all duration-1000 ease-out',
      }"
    >
      <div class="mb-8 md:mb-0 md:w-1/2">
        <h2
          id="dynamic-heading"
          class="mb-2 line-clamp-4 min-h-[5rem] bg-gradient-to-r from-custom-blue-dark to-custom-blue-light bg-clip-text pt-4 text-3xl leading-tight font-bold text-transparent transition-opacity duration-500 md:text-4xl dark:to-white"
        >
          {{ dynamicHeadingText }}
        </h2>
        <p class="mb-8 leading-loose">
          AF-DEV est la communauté de développeurs africains qui façonne
          l'avenir technologique du continent. Ensemble, construisons des
          solutions open-source innovantes et propulsons l'Afrique au cœur de la
          révolution numérique.
        </p>
        <div class="text-center md:text-left">
          <a
            href="#"
            class="btn-ripple inline-block rounded-full px-6 py-3 font-bold text-gray-100 drop-shadow-2xl transition-colors duration-300"
            >Rejoignez la révolution</a
          >
        </div>
      </div>
      <div class="home-img md:w-1/2">
        <img
          src="~/assets/img/home.svg"
          alt="Illustration AF-DEV"
          class="mx-auto w-full max-w-md"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const headings = ref([
  "Catalyseur de l'innovation Tech Africaine",
  "Innover, Connecter, Transformer",
  "L'avenir de la tech en Afrique commence ici",
  "Unis pour une Afrique numérique",
  "Construisons l'écosystème tech africain",
  "L'open-source au service de l'Afrique",
]);

const currentIndex = ref(0);
const dynamicHeadingText = ref("");
let typingTimeout: ReturnType<typeof setTimeout>;
let erasingTimeout: ReturnType<typeof setTimeout>;

const typeWriter = (i = 0) => {
  if (i < headings.value[currentIndex.value].length) {
    dynamicHeadingText.value += headings.value[currentIndex.value].charAt(i);
    typingTimeout = setTimeout(() => typeWriter(i + 1), 50);
  } else {
    setTimeout(eraseText, 2000);
  }
};

const eraseText = () => {
  if (dynamicHeadingText.value.length > 0) {
    dynamicHeadingText.value = dynamicHeadingText.value.slice(0, -1);
    erasingTimeout = setTimeout(eraseText, 25);
  } else {
    currentIndex.value = (currentIndex.value + 1) % headings.value.length;
    setTimeout(() => typeWriter(), 500);
  }
};

onMounted(() => {
  nextTick(() => {
    typeWriter();
  });
});

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout);
  if (erasingTimeout) clearTimeout(erasingTimeout);
});
</script>
