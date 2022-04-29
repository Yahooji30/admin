<template>
  <form @submit.prevent="addBranch">
    <div class="flex h-[100vh] w-full items-center justify-center">
      <div class="w-[25rem] rounded-md bg-white p-6 px-8">
        <div class="py-6">
          <span v-if="isSuccess" class="text-green-500 text-center text-sm"
            >Data Added Succesfully</span
          >
          <span v-if="isError" class="text-red-500 text-center text-sm"
            >Data Not Added !!</span
          >
          <h1 class="text-4xl">Add Branch</h1>
          <h4 class="my-2 text-sm font-light">Add store branches</h4>
        </div>
        <div>
          <div class="my-0.5">
            <label for="name" class="ml-0.5 text-sm">Branch Name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="name"
              v-model="branchData.name"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
          </div>
          <div class="my-0.5">
            <label for="email" class="ml-0.5 text-sm">Branch Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              v-model="branchData.email"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
          </div>
          <div class="my-3">
            <label for="phone" class="ml-0.5 text-sm"
              >Branch Phone Number</label
            >
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="123456789"
              v-model="branchData.phone"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
          </div>
          <div class="my-3">
            <label for="Address" class="ml-0.5 text-sm">Branch Address</label>
            <textarea
              type="text"
              name="Address"
              id="Address"
              rows="4"
              placeholder="street 11/c..."
              v-model="branchData.address"
              class="w-full rounded border-2 border-gray-300 indent-2"
              required
            ></textarea>
          </div>
          <div class="mt-7 my-6">
            <button
              type="submit"
              class="w-full rounded bg-violet-600 py-2 text-white disabled:bg-violet-300"
            >
              Add Branch
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { createBranch } from "../db/fireBase";

const isSuccess = ref(false);
const isError = ref(false);
const branchData = reactive({
  name: "",
  email: "",
  phone: "",
  address: "",
});

const addBranch = async () => {
  try {
    const result = await createBranch({ ...branchData });
    console.log(result);
    isSuccess.value = true;
    branchData.name = "";
    branchData.email = "";
    branchData.phone = "";
    branchData.address = "";
    setTimeout(() => {
      isSuccess.value = false;
    }, 1500);
  } catch (err) {
    console.log(err);
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 1500);
  }
};
</script>

<style lang="scss" scoped></style>
