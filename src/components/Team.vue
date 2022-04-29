<template>
  <section class="text-gray-100 body-font bg-gray-900 customFont">
    <div class="px-[10%] py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-100"
        >
          Our Team
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          beatae possimus sequi repudiandae distinctio voluptatum blanditiis
          deleniti officiis dolores debitis eligendi inventore reiciendis.
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div
          class="p-2 lg:w-1/3 md:w-1/2 w-full"
          v-for="member in members"
          :key="member.id"
        >
          <div
            class="h-full flex items-center border-gray-800 border p-4 rounded-lg"
          >
            <img
              alt="team"
              class="w-16 h-16 bg-gray-900 object-cover object-center flex-shrink-0 rounded-full mr-4"
              :src="geturl(member.profile)"
            />
            <div class="flex-grow">
              <h2
                class="text-gray-100 title-font text-lg font-semobold capitalize"
              >
                {{ member.name }}
              </h2>
              <p class="text-gray-400 capitalize">{{ member.designation }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getTeamMemeber } from "../db/fireBase";
const members = getTeamMemeber();
const defaultIMG = "https://dummyimage.com/98x98";
const geturl = (profile) => {
  return profile != "" ? profile : defaultIMG;
};
console.log("Outer Members : ", members);
</script>
