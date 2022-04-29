<template>
  <div class="realative flex h-[100vh]">
    <Sidebar />
    <div>
      <!-- Header -->
      <!-- <div class="bg-white px-2 py-4">Header</div> -->
      <!-- Content -->
      <div class="w-[81vw] h-[100vh]">
        <router-view class="bg-image bg-opacity-60 "> </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
const route = useRouter();
onMounted(() => {
  if (localStorage.getItem("isLogin")) {
    route.push("/dashboard");
  } else {
    route.push("/login");
  }
});
</script>

<style scoped>
.bg-image{
  background-image: url('../assets/dashboard-bg3.png');
}
</style>
