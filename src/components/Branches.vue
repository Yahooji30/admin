<template>
  <section class="text-gray-600 body-font">
    <div class="container px-[10%] py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2
          class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
        >
          DECORE BRANCHES
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          We Are Present Here
        </h1>
      </div>

      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3" v-for="branch in branches" :key="branch.id">
          <div class="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-gray-100 flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 class="text-gray-100 text-lg title-font font-medium">
                {{ branch.name }}
              </h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base text-gray-400">
                {{ branch.address }}
              </p>
              <p class="leading-relaxed text-base text-gray-400 mt-3">
                <span class="mr-1.5">Phone Number :</span>
                <span class=" lowercase ">{{ branch.phone }}</span>
              </p>
               <p class="leading-relaxed text-base text-gray-400 mt-1">
                <span class="mr-1.5">Email :</span>
                <span class=" lowercase ">{{ branch.email }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getBranches } from "../db/fireBase";

const branches = getBranches();
// export default {
//   setup(props) {
//     const branches = getBranches();
//     return {
//       branches,
//     };
//   },
// };
</script>

<style lang="scss" scoped></style>
