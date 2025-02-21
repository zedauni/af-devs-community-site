<template>
  <section
    class="bg-decoration-1x mt-7 px-24 w-full max-md:max-w-full"
    aria-labelledby="hero-title"
  >
    <div class="flex gap-5 max-md:flex-col">
      <div class="flex flex-col w-5/12 max-md:ml-0 max-md:w-full">
        <div
          class="flex z-10 flex-col self-stretch my-auto w-full max-md:mt-7 max-md:-mr-3.5 max-md:max-w-full"
        >
          <h2
            id="hero-title"
            class="font-manrope mr-14 text-6xl font-semibold tracking-tighter text-white leading-20 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-12"
          >
            Business And <span class="text-ora">Community</span> Come Together.
          </h2>
          <p
            class="mt-16 mr-14 text-xl font-medium leading-8 text-white text-opacity-80 max-md:mt-7 max-md:mr-2.5 max-md:max-w-full"
          >
            With our innovative marketing strategies, cutting-edge digital
            tools, and personal campaigns, we drive
          </p>
          <div
            class="bg-decoration-2x px-12 py-12 mt-16 rounded-2xl border border-solid bg-black/25 border-white/40 max-md:px-5 max-md:mt-7 max-md:max-w-full"
          >
            <div class="flex gap-5 max-md:flex-col">
              <div class="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                <div
                  class="flex shrink-0 mx-auto w-48 h-52 rounded-xl bg-stone-300 max-md:mt-7"
                  role="img"
                  aria-label="Decorative image"
                ></div>
              </div>
              <div class="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col max-md:mt-7">
                  <p
                    class="self-start text-7xl font-manrope font-bold text-ora max-md:text-4xl"
                  >
                    +1500
                  </p>
                  <p class="mt-5 text-base leading-7 text-white">
                    Whether you're looking to expand your network, find new
                    business opportunities, or share insights with like-minded
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col ml-5 w-7/12 max-md:ml-0 max-md:w-full">
        <div
          class="flex relative flex-col grow justify-center items-center px-24 py-16 max-md:px-5 max-md:max-w-full"
        >
          <img
            loading="lazy"
            src="~/assets/img/vision-cask.jpg"
            alt="Business and community illustration"
            class="object-cover absolute inset-0 size-full"
          />
          <div
            class="flex relative flex-col items-start justify-between w-full h-full max-w-full"
          >
            <div
              class="self-end px-10 py-8 max-w-full rounded-3xl border border-solid backdrop-blur-sm bg-black/30 border-white/30 w-md max-md:px-5"
            >
              <div class="flex gap-5 max-md:flex-col">
                <div class="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col text-white max-md:mt-7">
                    <h3 class="text-2xl font-medium max-md:mr-2 font-manrope">
                      Industry Leaders
                    </h3>
                    <p class="mt-7 text-base leading-7">
                      Whether you're looking to expand your network
                    </p>
                  </div>
                </div>
                <div
                  class="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full justify-between"
                >
                  <div
                    class="flex shrink-0 mx-auto items-center justify-center"
                    role="img"
                    aria-label="Decorative icon"
                  >
                    <VectorArrowOutward class="fill-white" />
                  </div>
                  <div
                    class="flex shrink-0 mx-auto bg-ora rounded-xl items-center justify-center"
                    role="img"
                    aria-label="Decorative icon"
                  >
                    <VectorPassword class="m-1 fill-white" />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full max-w-full">
              <div class="flex gap-5 flex-col">
                <div class="flex flex-col max-md:ml-0 max-md:w-full">
                  <h3
                    class="text-2xl font-semibold text-white max-md:mt-7"
                  >
                    Future of Networking
                  </h3>
                  <!-- Decoration (at right of Future of Network)
                  <div
                    class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full"
                  >
                    <div class="flex max-md:mt-7">
                      <div
                        class="shrink-0 self-end mt-32 h-0.5 border-2 border-white border-solid w-52 max-md:mt-7"
                        role="presentation"
                      ></div>
                      <div
                        class="shrink-0 w-0.5 border-2 border-white border-solid h-36"
                        role="presentation"
                      ></div>
                    </div>
                  </div>
                  -->
                  <p
                    class="mt-6 text-base leading-7 text-white"
                  >
                    Whether you're looking to expand your network, find new
                    business opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
