<template>
  <section
    class="flex flex-col px-24 mt-32 max-md:mt-10 rounded-none"
    aria-labelledby="business-community-title"
  >
    <div class="z-10 w-full max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col max-md:mt-10 max-md:max-w-full">
            <h1
              id="business-community-title"
              class="text-5xl font-semibold tracking-tighter text-white leading-14 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-12 font-manrope"
            >
              Business and <span class="text-ora">community</span> come
              together.
            </h1>
            <p
              class="mt-20 leading-8 text-white text-opacity-80 max-md:mt-10 max-md:max-w-full"
            >
              With features like group discussions, business matchmaking, and
              expert-led forums, you'll have access to the tools and resources
              to elevate your career or business.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col justify-between ml-5 w-4/12 max-md:ml-0 max-md:w-full"
        >
          <div class="flex flex-col grow text-white max-md:mt-10">
            <VectorLayers class="mb-3" />
            <h2 class="text-4xl">Let's build meaningful business</h2>
            <p class="mt-8 leading-8 text-white text-opacity-80">
              With features like group discussions, business matchmaking, and
              expert-led forums, you'll have access
            </p>
            <a
              href="#"
              class="self-start px-8 py-3 mt-10 font-semibold text-center border border-solid border-white/40 rounded-full max-md:px-5"
              aria-label="Read more about building meaningful business"
            >
              Read More
            </a>
          </div>
        </div>
        <div
          class="flex flex-col justify-between ml-5 w-4/12 max-md:ml-0 max-md:w-full"
        >
          <div class="flex flex-col grow items-start text-white max-md:mt-10">
            <VectorMoveUp class="mb-3" />
            <h2 class="text-4xl">Connections and expand</h2>
            <p class="self-stretch mt-8 leading-8 text-white text-opacity-80">
              With features like group discussions, business matchmaking, and
              expert-led forums, you'll have access
            </p>
            <a
              href="#"
              class="px-8 py-3 mt-10 font-semibold text-center border border-solid border-white/40 rounded-full max-md:px-5"
              aria-label="Read more about connections and expansion"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex grow items-center px-5 py-5 w-full text-2xl text-white rounded-2xl border border-solid bg-transparent border-white/30 max-md:px-5 max-md:mt-10 max-md:max-w-full"
            tabindex="0"
            role="region"
            aria-label="Platform that takes your professional"
          >
            <div class="flex w-16 justify-center mr-4">
              <VectorLda />
            </div>
            Platform that takes your professional
          </div>
        </div>
        <div class="flex flex-col ml-5 w-4/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex grow items-center px-5 py-5 w-full text-2xl text-white rounded-2xl border border-solid bg-transparent border-white/30 max-md:px-5 max-md:mt-10 max-md:max-w-full"
            tabindex="0"
            role="region"
            aria-label="Connect with industry leaders & innovators"
          >
            <div class="flex w-16 justify-center mr-4">
              <VectorMotionSensorActive />
            </div>
            Connect with industry leaders & innovators
          </div>
        </div>
        <div class="flex flex-col ml-5 w-4/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex grow items-center px-5 py-5 w-full text-2xl text-white rounded-2xl border border-solid bg-transparent border-white/30 max-md:px-5 max-md:mt-10 max-md:max-w-full"
            tabindex="0"
            role="region"
            aria-label="Opportunities meet connections"
          >
            <div class="flex w-16 justify-center mr-4">
              <VectorMatter />
            </div>
            Opportunities meet connections
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { VectorLayers, VectorMatter } from "#components";
import VectorMotionSensorActive from "../Vector/VectorMotionSensorActive.vue";
</script>

<style></style>
