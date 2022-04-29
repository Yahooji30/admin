<template>
  <section
    class="text-gray-100 bg-gray-900 body-font bg customFont"
    id="services"
  >
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-100 mb-4"
        >
          What we work
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          DECORE Interior Design is a full service interior design company that
          offers design and decorating solutions to residential and small scale
          commercial projects. We offer interior design and decorating services
          in many sates and cities, you can reach us easily
          <a href="#contactus" class="underline">Contact us</a>
        </p>
      </div>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div class="p-2 sm:w-1/2 w-full">
          <router-link
            to="/kitchen"
            class="bg-gray-800 rounded flex p-4 h-full items-center"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              class="text-gray-100 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Modular Kitchens</span>
          </router-link>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <router-link
            to="/furniture"
            class="bg-gray-800 rounded flex p-4 h-full items-center"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              class="text-gray-100 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Furniture</span>
          </router-link>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <router-link
            to="/fdaccessories"
            class="bg-gray-800 rounded flex p-4 h-full items-center"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              class="text-gray-100 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium"
              >Furnishings and Decor Accessories</span
            >
          </router-link>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <router-link
            to="/lighting"
            class="bg-gray-800 rounded flex p-4 h-full items-center"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              class="text-gray-100 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Lighting</span>
          </router-link>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <router-link
            to="/wall"
            class="bg-gray-800 rounded flex p-4 h-full items-center"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              class="text-gray-100 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Painting and Wallpaper</span>
          </router-link>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <router-link
            to="/wadrobe"
            class="bg-gray-800 rounded flex p-4 h-full items-center"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              class="text-gray-100 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Wardrobe Designs</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
bg {
  background-image: url("../assets/images/dark-dot.png");
}
</style>
