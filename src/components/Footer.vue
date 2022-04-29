<template>
  <footer class="text-gray-600 bg-gray-900 body-font">
    <div
      class="px-[5%] py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <img
          src="https://see.fontimg.com/api/renderfont4/nRRd0/eyJyIjoiZnMiLCJoIjo1NiwidyI6MTI1MCwiZnMiOjQ1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGVjb3Jl/mandatory-plaything.png"
          alt="logo"
          class="w-36"
        />
        <p class="mt-5 text-sm text-gray-500">
          There are three responses to a piece of design – yes, no, and WOW! Wow
          is the one to aim for.
        </p>
      </div>

      <div
        class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
      >
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-100 tracking-widest text-sm mb-3"
          >
            CATEGORIES
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-200 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-200 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-200 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-200 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-100 tracking-widest text-sm mb-3"
          >
            CATEGORIES
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-200 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-200 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-200 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-200 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-100 tracking-widest text-sm mb-3"
          >
            Address
          </h2>
          <p class="text-gray-100 pb-3">
            {{ address }}
          </p>
          <p class="pb-3">
            <span class="text-gray-100 pr-1">Email : </span
            ><span class="text-gray-100">{{ email }}</span>
          </p>
          <p>
            <span class="text-gray-100 pr-1">Phone : </span
            ><span class="text-gray-100">{{ phone }}</span>
          </p>
        </div>
      </div>
    </div>

    <Copyright />
  </footer>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Copyright from "./Copyright.vue";
import { getContact } from "../db/fireBase";

const address = ref("");
const email = ref("");
const phone = ref("");
onMounted(async () => {
  const result = await getContact();
  address.value = result.address;
  email.value = result.email;
  phone.value = result.phone;
});
</script>
