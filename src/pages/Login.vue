<template>
  <div
    class="flex h-[100vh] w-full items-center justify-center bg-gray-900 bg-img"
  >
    <div class="w-[25rem] rounded-md bg-white p-6 px-8">
      <div class="py-6">
        <span v-if="errMsg" class="text-red-500 text-center text-sm">{{
          errMsg
        }}</span>
        <h1 class="text-4xl">Sign In</h1>
        <h4 class="my-2 text-sm">Authenticate securely</h4>
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
        <div class="my-3">
          <label for="password" class="ml-0.5 text-sm">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="pass"
            placeholder="*********"
            class="h-10 w-full rounded border-2 border-gray-300 indent-2"
          />
        </div>
        <div>
        <div class="pb-3 text-right">
          <router-link to="/forgot" class="text-violet-900"
            >Forgot Password ?</router-link
          >
        </div>
      </div>
        <div class="mt-7 my-6">
          <button
            @click="signIn()"
            type="submit"
            class="w-full rounded bg-gray-900 py-2 text-white"
          >
            Sign In
          </button>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { useRouter } from "vue-router";

const route = useRouter();
const email = ref("");
const pass = ref("");
const errMsg = ref("");

const signIn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User :", user.uid);
      localStorage.setItem("isLogin", true);
      route.push("/dashboard");
    })
    .catch((error) => {
      const errorCode = error.code;
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email not found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect Password";
          break;
        default:
          errMsg.value = "Email or Password Incorrect";
          break;
      }
    });
};

onMounted(() => {
  if (localStorage.getItem("isLogin")) {
    route.push("/dashboard");
  }
});
</script>

<style scoped>
.bg-img {
  background-image: url("../assets/black-mamba.png");
}
</style>
