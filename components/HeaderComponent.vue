<template>
  <header class="flex flex-col rounded-none mt-5 px-24 font-manrope">
    <nav
      class="flex flex-wrap gap-10 justify-between w-full text-lg font-bold text-white max-md:max-w-full"
      aria-label="Main navigation"
    >
      <a href="/">
        <h1 class="flex space-x-2 items-center text-3xl">
          <VectorLogo />
          <span class="">AFRIK DEVS</span>
        </h1>
      </a>
      <ul
        class="flex flex-wrap gap-10 items-center my-auto font-semibold text-sky-50 max-md:max-w-full"
      >
        <li>
          <a href="/" class="self-stretch my-auto text-ora active"
            >Home</a
          >
        </li>
        <li>
          <a href="#" class="self-stretch my-auto hover:text-ora"
            >About Us</a
          >
        </li>
        <li>
          <a href="#" class="self-stretch my-auto hover:text-ora"
            >Blogs</a
          >
        </li>
        <li>
          <a href="#" class="self-stretch my-auto hover:text-ora"
            >Afrik Portfolios</a
          >
        </li>
        <li>
          <a href="#" class="self-stretch my-auto hover:text-ora"
            >Contact</a
          >
        </li>
      </ul>
      <a
        href="https://t.me/devs_forum"
        class="px-3 py-3 uppercase rounded-xl border border-solid border-white/30 hover:bg-ora"
        role="button"
      >
        Join COMMUNITY
      </a>
    </nav>
  </header>
</template>