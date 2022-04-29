<template>
  <section>
    <div class="w-full h-full relative">
      <img
        src="../assets/images/a2.jpg"
        alt="absolute inset-0 w-full h-[100vh] object-cover"
      />
      <div class="absolute inset-0 w-full bg-gray-900 bg-opacity-60"></div>
      <Header />
      <HeroQuote />
    </div>
  </section>
</template>

<script setup>
import Header from "../components/Header.vue";
import HeroQuote from "./HeroQuote.vue";
</script>
