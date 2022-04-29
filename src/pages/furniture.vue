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
            :src="item.thumbnail"
            class="bject-contain rounded-t-md w-full h-44"
          />
        </div>
        <div class="px-2 py-1.5">
          <p class="text-[1.05rem] tracking-wide">
            {{ item.description }}
          </p>
        </div>
        <div class="py-4 px-1.5">
          <span class="text-gray-900 mr-1 text-2xl">Price : </span>
          <span class="text-red-600 text-xl">{{ item.price }}</span>
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
const items = [
  {
    id: 1,
    description: "White,clean,bright and simple finishing modular kitchen",
    thumbnail: "/src/assets/images/a30.jpg",
    price: "₹80000",
  },
  {
    id: 2,
    description: "White,clean,bright and simple finishing modular kitchen",
    thumbnail: "/src/assets/images/a31.jpg",
    price: "₹75000",
  },
  {
    id: 3,
    description: "White,clean,bright and simple finishing modular kitchen",
    thumbnail: "/src/assets/images/a32.jpg",
    price: "₹110000",
  },
  {
    id: 4,
    description: "White,clean,bright and simple finishing modular kitchen",
    thumbnail: "/src/assets/images/a33.jpg",
    price: "₹18000",
  },
  {
    id: 5,
    description: "White,clean,bright and simple finishing modular kitchen",
    thumbnail: "/src/assets/images/a34.jpg",
    price: "₹280000",
  },
  {
    id: 6,
    description: "White,clean,bright and simple finishing modular kitchen",
    thumbnail: "/src/assets/images/a35.jpg",
    price: "₹185000",
  },
  {
    id: 7,
    description: "White,clean,bright and simple finishing modular kitchen",
    thumbnail: "/src/assets/images/a36.jpg",
    price: "₹24000",
  },
  {
    id: 8,
    description: "White,clean,bright and simple finishing modular kitchen",
    thumbnail: "/src/assets/images/a37.jpg",
    price: "₹90000",
  },
];
</script>

<style lang="scss" scoped></style>
