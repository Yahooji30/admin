<template>
  <div
    class="absolute top-0 w-full h-24 px-[12%] text-white flex items-center justify-between"
  >
    <router-link to="/">
      <img
        src="https://see.fontimg.com/api/renderfont4/nRRd0/eyJyIjoiZnMiLCJoIjo1NiwidyI6MTI1MCwiZnMiOjQ1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGVjb3Jl/mandatory-plaything.png"
        alt="logo"
        class="w-36"
    /></router-link>

    <nav class="md:flex gap-6 customFont hidden md:visible ">
      <a
        href="#"
        class="text-xl hover:border-b-2 hover:border-gray-100 hover:transition hover:duration-500 hover:ease-in-out"
        >Home</a
      >
      <a
        href="#about"
        class="text-xl hover:border-b-2 hover:border-gray-100 hover:transition hover:duration-500 hover:ease-in-out"
        >About</a
      >
      <a
        href="#services"
        class="text-xl hover:border-b-2 hover:border-gray-100 hover:transition hover:duration-500 hover:ease-in-out"
        >Services</a
      >
      <a
        href="#gallery"
        class="text-xl hover:border-b-2 hover:border-gray-100 hover:transition hover:duration-500 hover:ease-in-out"
        >Gallery</a
      >
      <router-link
        to="/login"
        class="flex items-center ml-5 px-6 py-2 bg-gray-500 text-gray-100 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
        <span>Sign In</span>
      </router-link>
    </nav>
  </div>
</template>
