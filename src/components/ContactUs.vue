<template>
  <section class="text-gray-600 body-font relative" id="contactus">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.20942139726!2d74.80007998337827!3d31.633671193875497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1650789489437!5m2!1sen!2sin"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
      ></iframe>
    </div>
    <form @submit.prevent="send">
      <div class="container px-[5%] py-24 mx-auto flex">
        <div
          class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <h2 class="text-gray-900 text-3xl mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p class="leading-relaxed text-sm mb-5 text-gray-600">
            Reach to DECORE by conactus form
          </p>

          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600"
              >Name</label
            >
            <input
              type="name"
              id="name"
              name="name"
              v-model="data.name"
              placeholder="name"
              class="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              v-model="data.email"
              placeholder="example@gmail.com"
              class="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative mb-4">
            <label for="phone" class="leading-7 text-sm text-gray-600"
              >Phone</label
            >
            <input
              type="phone"
              id="phone"
              name="phone"
              v-model="data.phone"
              placeholder="phonenumber"
              class="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="phone" class="leading-7 text-sm text-gray-600"
              >Location</label
            >
            <input
              type="location"
              id="location"
              name="location"
              v-model="data.location"
              placeholder="location"
              class="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600"
              >Message</label
            >
            <textarea
              rows="4"
              id="message"
              name="message"
              v-model="data.message"
              placeholder="Enter Message"
              class="w-full bg-white rounded border border-gray-300 focu outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            class="text-white cursor-pointer bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg"
          />
          <p
            class="text-xs text-green-500 mt-3 transition duration-500 ease-in-out"
            v-if="isSuccess"
          >
            Succesfully Message Send
          </p>
          <p
            class="text-xs text-red-500 mt-3 transition duration-500 ease-in-out"
            v-if="isError"
          >
            Message Not Send
          </p>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { sendMessage } from "../db/fireBase";
const data = reactive({
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
});
const isSuccess = ref(false);
const isError = ref(false);

async function send() {
  try {
    let result = await sendMessage(data);
    isSuccess.value = true;
    setTimeout(() => {
      isSuccess.value = false;
      (data.name = ""),
        (data.email = ""),
        (data.phone = ""),
        (data.location = ""),
        (data.message = "");
    }, 1500);
    console.log(result);
  } catch (err) {
    console.log(err);
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 1500);
  }
}
</script>

<style lang="scss" scoped></style>
