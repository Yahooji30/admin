<template>
  <form @submit.prevent="editmember">
    <div class="flex h-[100vh] w-full items-center justify-center">
      <div class="w-[25rem] rounded-md bg-white p-6 px-8">
        <div class="py-6">
          <span v-if="isSuccess" class="text-green-500 text-center text-sm"
            >Data Added Succesfully</span
          >
          <span v-if="isError" class="text-red-500 text-center text-sm"
            >Data Not Added !!</span
          >
          <h1 class="text-4xl">Update member</h1>
          <h4 class="my-2 text-sm font-light">Team members details</h4>
        </div>
        <div>
          <div class="my-0.5">
            <label for="adharID" class="ml-0.5 text-sm">Adhar ID</label>
            <input
              type="Number"
              name="adharID"
              id="adharID"
              placeholder="example"
              v-model="data.adharID"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
          </div>

          <div class="my-0.5">
            <label for="name" class="ml-0.5 text-sm">Gender</label>
            <div class="flex py-2 gap-6">
              <div class="">
                <label for="male" class="mr-3">
                  <input
                    type="radio"
                    name="sex"
                    id="male"
                    class="mr-2"
                    value="male"
                    v-model="data.gender"
                  />Male
                </label>
                <label for="female" class="mr-3">
                  <input
                    type="radio"
                    name="sex"
                    id="female"
                    class="mr-2"
                    value="female"
                    v-model="data.gender"
                  />Female
                </label>
              </div>
            </div>
          </div>

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
            />
          </div>

          <div class="my-3">
            <label for="ds" class="ml-0.5 text-sm">Designation</label>
            <input
              type="text"
              name="designation"
              id="designation"
              placeholder="Founder,MD,etc"
              v-model="data.designation"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
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
import { reactive, ref, onMounted, computed } from "vue";
import { updateTeamMember, getMember } from "../db/fireBase";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const MemberID = computed(() => route.params.id);
const data = reactive({
  adharID: "",
  name: "",
  gender: "",
  designation: "",
});
const isSuccess = ref(false);
const isError = ref(false);

async function editmember() {
  try {
    await updateTeamMember(MemberID.value, data);
    isSuccess.value = true;
    setTimeout(() => {
      (data.adharID = ""),
        (data.name = ""),
        (data.gender = ""),
        (data.designation = ""),
        (isSuccess.value = false);
    }, 1500);
  } catch (error) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 1500);
    console.log(error);
  }
}

onMounted(async () => {
  const deatil = await getMember(MemberID.value);
  data.adharID = deatil.adharID;
  data.name = deatil.name;
  data.gender = deatil.gender;
  data.designation = deatil.designation;
});
</script>
