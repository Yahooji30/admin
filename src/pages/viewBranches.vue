<template>
  <div class="flex h-[100vh] w-full items-center justify-center">
    <div class="w-[70rem] rounded-md bg-white p-6 px-8">
      <div class="relative overflow-x-auto sm:rounded-lg">
        <div class="py-6">
          <span v-if="isSuccess" class="text-green-500 text-center text-sm"
            >Data Deleted Succesfully</span
          >
          <span v-if="isError" class="text-red-500 text-center text-sm"
            >Data Not Deleted !!</span
          >
          <h1 class="text-4xl">Branches</h1>
          <h4 class="my-2 text-sm font-light">Your Branches details</h4>
        </div>
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Branch Name</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Phone</th>
              <th scope="col" class="px-6 py-3">Address</th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
              v-for="branch in branches"
              :key="branch.id"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {{ branch.name }}
              </th>
              <td class="px-6 py-4">{{ branch.email }}</td>
              <td class="px-6 py-4">{{ branch.phone }}</td>
              <td class="px-6 py-4">{{ branch.address }}</td>
              <td class="px-6 py-4 flex gap-5 text-right">
                <router-link
                  :to="`/dashboard/editbranch/${branch.id}`"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</router-link
                >
                <a
                  @click="removeBranch(branch.id)"
                  class="font-medium text-red-600 dark:red-500 hover:underline cursor-pointer"
                  >Delete</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getBranches, deleteBranch } from "../db/fireBase";
const branches = getBranches();

const isSuccess = ref(false);
const isError = ref(false);

async function removeBranch(id) {
  try {
    await deleteBranch(id);
    isSuccess.value = true;
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
}
</script>

<style lang="scss" scoped></style>
