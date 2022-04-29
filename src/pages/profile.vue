<template>
  <form @submit.prevent="changeDetails">
    <div class="flex h-[100vh] w-full items-center justify-center">
      <div class="w-[25rem] rounded-md bg-white p-6 px-8">
        <div class="py-6">
          <span v-if="isSuccess" class="text-green-500 text-center text-sm"
            >Profile Update Succesfully</span
          >
          <span v-if="isError" class="text-red-500 text-center text-sm"
            >Profile Not Update !!</span
          >
          <h1 class="text-4xl">My Profile</h1>
          <h4 class="my-2 text-sm font-light">My personal Details</h4>
        </div>
        <div>
          <div class="my-0.5">
            <label for="name" class="ml-0.5 text-sm">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="example"
              v-model="data.name"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
              :disabled="edit"
            />
          </div>

          <div class="my-3">
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
            <label for="email" class="ml-0.5 text-sm">Gender</label>
            <select
              v-model="data.gender"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
            >
              <option disabled value="">Please select gender</option>
              <option>male</option>
              <option>female</option>
            </select>
          </div>

          <div class="mt-7 my-6">
            <button
              type="submit"
              class="w-full rounded bg-violet-600 py-2 text-white disabled:bg-violet-300"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { getProfileDetail, updateUserProfile } from "../db/fireBase";
import { getAuth } from "firebase/auth";
const data = reactive({
  name: "",
  gender: "",
});

const email = ref("");
const auth = getAuth();
const user = auth.currentUser;
console.log(user);
email.value = user.email;

const isSuccess = ref(false);
const isError = ref(false);

const changeDetails = async () => {
  try {
    await updateUserProfile(data);
    isSuccess.value = true;
    setTimeout(() => {
      isSuccess.value = false;
    }, 1500);
  } catch (error) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 1500);
    console.log(error);
  }
};

onMounted(async () => {
  const result = await getProfileDetail();
  console.log("Result", result);
  data.name = result.name;
  data.gender = result.gender;
});
</script>

<style lang="scss" scoped></style>
