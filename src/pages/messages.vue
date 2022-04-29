<template>
  <div class="flex h-[100vh] w-full items-center justify-center">
    <div class="w-[75rem] rounded-md bg-white p-6 px-8">
      <div class="relative overflow-x-auto sm:rounded-lg">
        <div class="py-6">
          <h1 class="text-4xl">Messages</h1>
          <h4 class="my-2 text-sm font-light">Messagess from vistors</h4>
        </div>
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Phone</th>
              <th scope="col" class="px-6 py-3">Location</th>
              <th scope="col" class="px-6 py-3">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
              v-for="message in messages"
              :key="message.id"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {{ message.name }}
              </th>
              <td class="px-6 py-4">{{ message.email }}</td>
              <td class="px-6 py-4">{{ message.phone }}</td>
              <td class="px-6 py-4">{{ message.location }}</td>
              <td class="px-6 py-4">{{ message.message }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getMessages } from "../db/fireBase";
const messages = getMessages();

const isSuccess = ref(false);
const isError = ref(false);
</script>

<style lang="scss" scoped></style>
