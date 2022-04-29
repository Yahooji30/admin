<template>
  <form @submit.prevent="updateDetails">
    <div class="flex h-[100vh] w-full items-center justify-center">
      <div class="w-[25rem] rounded-md bg-white p-6 px-8">
        <div class="py-6">
          <span v-if="isSuccess" class="text-green-500 text-center text-sm"
            >Succesfully Chnaged</span
          >
          <span v-if="isError" class="text-red-500 text-center text-sm"
            >Data Not Changed !!</span
          >
          <h1 class="text-4xl">Contact Details</h1>
          <h4 class="my-2 text-sm font-light">Show your details to users</h4>
        </div>
        <div>
          <div class="my-0.5">
            <label for="email" class="ml-0.5 text-sm">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              v-model="formData.email"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
              :disabled="edit"
            />
          </div>
          <div class="my-3">
            <label for="phone" class="ml-0.5 text-sm">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="123456789"
              v-model="formData.phone"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
              :disabled="edit"
            />
          </div>
          <div class="my-3">
            <label for="Address" class="ml-0.5 text-sm">Address</label>
            <textarea
              type="text"
              name="Address"
              id="Address"
              rows="4"
              placeholder="street 11/c..."
              v-model="formData.address"
              class="w-full rounded border-2 border-gray-300 indent-2"
              required
              :disabled="edit"
            ></textarea>
          </div>
          <div>
            <a
              href="#"
              @click="isEdit()"
              class="text-violet-500 flex justify-end"
              >Edit</a
            >
          </div>
          <div class="mt-7 my-6">
            <button
              type="submit"
              class="w-full rounded bg-violet-600 py-2 text-white disabled:bg-violet-300"
              :disabled="edit"
            >
              Update Contact Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { getContact, updateContact } from "../db/fireBase";

const edit = ref(true);

const isEdit = () => {
  edit.value = false;
};
const isSuccess = ref(false);
const isError = ref(false);

const formData = reactive({
  email: "",
  phone: "",
  address: "",
});
const userID = ref("7EycdcYIMtJKslLrAkvp");

async function updateDetails() {
  try {
    await updateContact(userID.value, {
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
    });
    edit.value = false;
    isSuccess.value = true;
    setTimeout(() => {
      isSuccess.value = false;
    }, 1500);
  } catch (err) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 1500);
    console.log(err);
  }
}

onMounted(async () => {
  const detail = await getContact(userID.value);
  formData.email = detail.email;
  formData.phone = detail.phone;
  formData.address = detail.address;
});
</script>

<style lang="scss" scoped></style>
