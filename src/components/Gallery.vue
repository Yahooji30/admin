<template>
  <section class="text-gray-600 body-font" id="gallery">
    <div class="container px-[10%] py-24 mx-auto flex flex-wrap">
      <div class="flex flex-col w-full mb-20 flex-wrap">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-1"
        >
          Our Works
        </h1>
        <router-link
          to="/gallery"
          class="text-blue-600 font-semibold mt-3 cursor-pointer"
          >View all works...</router-link
        >
      </div>
      <div class="flex flex-wrap md:-m-2 -m-1">
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="../assets/images/a3.jpg"
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="../assets/images/a4.jpg"
            />
          </div>
          <div class="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center block"
              src="../assets/images/a5.jpg"
            />
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center block"
              src="../assets/images/a6.jpg"
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="../assets/images/a7.jpg"
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="../assets/images/a8.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>
