<template>
  <div
    class="top-0 w-full h-24 px-[12%] bg-gray-900 text-white flex items-center justify-between"
  >
    <router-link to="/">
      <img
        src="https://see.fontimg.com/api/renderfont4/nRRd0/eyJyIjoiZnMiLCJoIjo1NiwidyI6MTI1MCwiZnMiOjQ1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGVjb3Jl/mandatory-plaything.png"
        alt="logo"
        class="w-36"
    /></router-link>

    <nav class="flex gap-6 customFont">
      <router-link
        to="/"
        class="text-xl hover:border-b-2 hover:border-gray-100 hover:transition hover:duration-500 hover:ease-in-out"
        >Home</router-link
      >
      <router-link
        to="/#about"
        class="text-xl hover:border-b-2 hover:border-gray-100 hover:transition hover:duration-500 hover:ease-in-out"
        >About</router-link
      >
      <a
        href=""
        class="text-xl hover:border-b-2 hover:border-gray-100 hover:transition hover:duration-500 hover:ease-in-out"
        >Services</a
      >
      <a
        href="/gallery"
        class="text-xl hover:border-b-2 hover:border-gray-100 hover:transition hover:duration-500 hover:ease-in-out"
        >Gallery</a
      >
    </nav>
  </div>
</template>
