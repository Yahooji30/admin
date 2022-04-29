<template>
  <form @submit.prevent="changePassword">
    <div class="flex h-[100vh] w-full items-center justify-center">
      <div class="w-[25rem] rounded-md bg-white p-6 px-8">
        <div class="py-6">
          <span v-if="isSuccess" class="text-green-500 text-center text-sm"
            >Password Changed Succesfully</span
          >
          <span v-if="isError" class="text-red-500 text-center text-sm"
            >Password Not Changed !!</span
          >
          <span v-if="Msg" class="text-red-500 text-center text-sm"
            >Password Not match !!</span
          >

          <h1 class="text-4xl">Change Password</h1>
          <h4 class="my-2 text-sm font-light">Securely your account</h4>
        </div>
        <div>
          <div class="my-0.5">
            <label for="email" class="ml-0.5 text-sm">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              v-model="email"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
              disabled
            />
          </div>
          <div class="my-3">
            <label for="npassword" class="ml-0.5 text-sm">New Password</label>
            <input
              type="password"
              name="npassword"
              id="npassword"
              placeholder="*********"
              v-model="npassword"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
          </div>
          <div class="my-3">
            <label for="cpassword" class="ml-0.5 text-sm"
              >Confirm Password</label
            >
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="*********"
              v-model="cpassword"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
          </div>
          <div class="mt-7 my-6">
            <button
              type="submit"
              class="w-full rounded bg-violet-600 py-2 text-white"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { getAuth, updatePassword, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const route = useRouter();
const email = ref("");
const npassword = ref("");
const cpassword = ref("");
const Msg = ref(false);
const auth = getAuth();
const user = auth.currentUser;
email.value = user.email;
console.log("User : ", user);

const isSuccess = ref(false);
const isError = ref(false);

const changePassword = async () => {
  if (npassword.value == cpassword.value) {
    try {
      await updatePassword(user, cpassword.value);
      isSuccess.value = true;

      setTimeout(() => {
        isSuccess.value = false;
        signOut(auth).then(() => {
          localStorage.removeItem("isLogin");
          route.push("/login");
        });
      }, 1500);
    } catch (error) {
      isError.value = true;
      setTimeout(() => {
        isError.value = false;
      }, 1500);
      console.log(error);
    }
  } else {
    Msg.value = true;
    setTimeout(() => {
      Msg.value = false;
    }, 1500);
  }
};
</script>

<style lang="scss" scoped></style>
