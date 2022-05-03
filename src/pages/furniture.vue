<template>
  <BlackHeader />
  <div class="bg-gray-100 px-[10%]">
    <div class="py-10">
      <h1 class="text-4xl font-semibold">Furniture Design</h1>
      <h4 class="my-2 text-sm">See our some best furniture works</h4>
    </div>
    <div class="grid grid-cols-4 gap-4 gap-y-10 pb-12">
      <div
        class="bg-white shadow rounded-md"
        v-for="item in items"
        :key="item.id"
      >
        <div>
          <img
            :src="item.productImage"
            class="bject-contain rounded-t-md w-full h-44"
          />
        </div>
        <div class="px-2 py-1.5">
          <p class="text-[1.3rem] tracking-wide">
            {{ item.productName }}
          </p>
        </div>
        <div class="px-2 py-1.5">
          <p class="text-[0.8rem] tracking-wide">
            {{ item.description }}
          </p>
        </div>
        <div class="py-4 px-1.5">
          <span class="text-gray-900 mr-1 text-xl">Price : </span>
          <span class="text-red-600 text-xl">₹ {{ item.price }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center pb-12">
      <span class="text-gray-700">We will release our more soon......</span>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import BlackHeader from "../components/blackHeader.vue";
import Footer from "../components/Footer.vue";
import { getFurnitureProducts } from "../db/fireBase";

const items = getFurnitureProducts();
</script>

<style lang="scss" scoped></style>
