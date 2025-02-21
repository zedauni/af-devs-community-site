<template>
  <footer class="bg-decoration-2x flex flex-col mt-32 max-md:mt-10 rounded-none bg-black/45">
    <div
      class="flex flex-col items-center px-24 pt-32 pb-20 w-full border-t border-white/30 max-md:px-5 max-md:pt-24 max-md:max-w-full"
    >
      <div class="flex flex-col w-full">
        <div class="flex justify-between w-full">
          <div class="w-1/2 flex flex-col shrink font-bold text-white max-md:max-w-full">
            <a href="#" class="flex flex-wrap gap-2 self-start text-3xl font-manrope">
              <VectorLogo />
              <span class="">AFRIK DEVS</span>
            </a>
            <h2 class="mt-5 max-md:max-w-full font-bold font-manrope">
              Social Network & Community Website
            </h2>
          </div>
          <div
            class="w-1/2 font-medium leading-7 text-white text-opacity-80"
          >
            With features like group discussions, business matchmaking, and
            expert-led forums, you'll have access to the tools and resources to
            elevate your career or business. Join us today and become
          </div>
        </div>
        <nav
          class="flex flex-wrap gap-5 justify-between mt-32 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full font-manrope"
          aria-label="Footer Navigation"
        >
          <div class="flex flex-col self-start">
            <h3
              class="self-start text-xl font-bold text-ora uppercase tracking-[3px]"
            >
              Explore
            </h3>
            <ul
              class="mt-4 text-base font-medium leading-10 text-white bg-blend-normal"
            >
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Meet the Team</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Collaborations</a></li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h3
              class="self-start text-xl font-bold text-ora uppercase tracking-[3px]"
            >
              Services
            </h3>
            <ul
              class="mt-4 text-base font-medium leading-10 text-white bg-blend-normal"
            >
              <li><a href="#">Creative Collaborations</a></li>
              <li><a href="#">Branding & Visual Identity</a></li>
              <li><a href="#">Workshops & Masterclasses</a></li>
              <li><a href="#">Consultation Services</a></li>
              <li><a href="#">Art Exhibitions</a></li>
              <li><a href="#">Online Community Platform</a></li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h3
              class="self-start text-xl font-bold text-ora uppercase tracking-[3px]"
            >
              Connect
            </h3>
            <ul
              class="mt-4 text-base font-medium leading-10 text-white bg-blend-normal"
            >
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Join Our Newsletter</a></li>
              <li><a href="#">Follow Us on Instagram</a></li>
              <li><a href="#">Like Us on Facebook</a></li>
              <li><a href="#">Subscribe on YouTube</a></li>
            </ul>
          </div>
          <div class="flex flex-col self-start">
            <h3
              class="text-xl font-bold text-ora uppercase tracking-[3px]"
            >
              Resources
            </h3>
            <ul
              class="mt-4 text-base font-medium leading-10 text-white bg-blend-normal"
            >
              <li><a href="#">Blog</a></li>
              <li><a href="#">Creative Tools</a></li>
              <li><a href="#">Industry Trends</a></li>
              <li><a href="#">Event Calendar</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h3
              class="self-start text-xl font-bold text-ora uppercase tracking-[3px]"
            >
              Legal
            </h3>
            <ul
              class="mt-4 text-base font-medium leading-10 text-white bg-blend-normal"
            >
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Copyright Information</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
        </nav>
        <div
          class="flex shrink-0 mt-16 w-full h-px bg-white max-md:mt-10 max-md:mr-2.5"
          role="separator"
        ></div>
        <div
          class="flex flex-wrap gap-5 justify-between mt-20 max-w-full font-semibold text-white max-md:mt-10 font-manrope"
        >
          <div class="flex gap-10 self-start text-lg whitespace-nowrap">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
          <div class="text-xl leading-none text-center">
            © {{ currentYear }} By AFRIK DEVS. All Rights Reserved.
          </div>
          <div class="flex gap-4 self-start text-lg whitespace-nowrap">
            <a href="#">
              <VectorFacebook class="fill-gray-400 w-12 h-12" />
            </a>
            <a href="#">
              <VectorLinkedin class="fill-gray-400 w-12 h-12" />
            </a>
            <a href="#">
              <VectorTwitter class="fill-gray-400 w-12 h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { VectorFacebook, VectorLinkedin, VectorTwitter } from '#components';

const currentYear = computed((): number => new Date().getFullYear());
</script>
