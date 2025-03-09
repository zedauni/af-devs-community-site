<template>
  <!-- Home Section -->
  <section id="home">
    <div
      class="container md:w-9/12 mx-auto px-4 flex flex-col-reverse md:flex-row items-center"
      v-animate-on-scroll="{
        hidden: 'opacity-0 translate-y-0',
        visible: 'opacity-100 translate-y-10',
        transition: 'transition-all duration-1000 ease-out',
      }"
    >
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h2
          id="dynamic-heading"
          class="text-3xl md:text-4xl pt-4 leading-tight font-bold mb-2 bg-gradient-to-r from-custom-blue-dark to-custom-blue-light dark:to-white bg-clip-text text-transparent transition-opacity duration-500 min-h-[5rem] line-clamp-4"
        >
          {{ dynamicHeadingText }}
        </h2>
        <p class="leading-loose mb-8">
          AF-DEV est la communauté de développeurs africains qui façonne
          l'avenir technologique du continent. Ensemble, construisons des
          solutions open-source innovantes et propulsons l'Afrique au cœur de la
          révolution numérique.
        </p>
        <div class="text-center md:text-left">
          <a
            href="#"
            class="inline-block btn-ripple text-gray-100 font-bold py-3 px-6 rounded-full transition-colors duration-300 drop-shadow-2xl"
            >Rejoignez la révolution</a
          >
        </div>
      </div>
      <div class="md:w-1/2 home-img">
        <img
          src="~/assets/img/home.svg"
          alt="Illustration AF-DEV"
          class="w-full max-w-md mx-auto"
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
