<template>
  <div
    class="flex h-[100vh] w-full items-center justify-center bg-gray-900 bg-img"
  >
    <div class="w-[25rem] rounded-md bg-white p-6 px-8">
      <div class="py-6">
        <span v-if="isSuccess" class="text-green-500 text-center text-sm"
          >Password reset link sent</span
        >
        <span v-if="isError" class="text-red-500 text-center text-sm"
          >Password reset link not sent !!</span
        >
        <h1 class="text-4xl">Forgot Password</h1>
        <h4 class="my-2 text-sm">Set new password</h4>
      </div>
      <div>
        <div class="my-0.5">
          <label for="email" class="ml-0.5 text-sm">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            placeholder="example@example.com"
            class="h-10 w-full rounded border-2 border-gray-300 indent-2"
          />
        </div>
        <!-- <div class="my-3">
          <label for="password" class="ml-0.5 text-sm">New Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="data.newPassword"
            placeholder="*********"
            class="h-10 w-full rounded border-2 border-gray-300 indent-2"
          />
        </div> -->
        <div class="pt-3">
          <p class="text-sm text-gray-500">
            Enter your email to get password reset link on entered email address
            or registered email
          </p>
        </div>
        <div class="mt-7 my-6">
          <button
            @click="getResetLink"
            type="submit"
            class="w-full rounded bg-gray-900 py-2 text-white"
          >
            Get Link
          </button>
        </div>
      </div>
      <div>
        <div class="pb-4 text-center">
          <span class="text-gray-700">Already Account ? </span
          ><router-link to="/login" class="text-violet-900"
            >Sign In</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import instance from "../axios";
const auth = getAuth();
const email = ref("");
const isSuccess = ref(false);
const isError = ref(false);

const getResetLink = () => {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      isSuccess.value = true;
      setTimeout(() => {
        isSuccess.value = false;
      }, 1500);
    })
    .catch((error) => {
      isError.value = true;
      setTimeout(() => {
        isError.value = false;
      }, 1500);
      // ..
      console.log(error);
    });
};
</script>

<style scoped>
.bg-img {
  background-image: url("../assets/black-mamba.png");
}
</style>
