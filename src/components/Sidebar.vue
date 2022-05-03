<template>
  <div class="realative flex h-[100vh]">
    <!-- Sidebar -->
    <div class="bg-violet-50 text-black w-[18rem]">
      <div class="flex justify-start items-center py-4 mb-3 px-4 bg-violet-700">
        <img src="../assets/dot.png" class="w-7 h-7 ml-2 mr-3 mt-1" />
        <img
          src="https://see.fontimg.com/api/renderfont4/nRRd0/eyJyIjoiZnMiLCJoIjo1NiwidyI6MTI1MCwiZnMiOjQ1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGVjb3Jl/mandatory-plaything.png"
          alt="logo"
          class="w-36"
        />
      </div>
      <nav class="px-4">
        <Nav text="Add Members" :icon="icons[0]" link="/dashboard" />
        <Nav text="All Members" :icon="icons[1]" link="/dashboard/members" />
        <Nav text="Messages" :icon="icons[2]" link="/dashboard/messages" />
        <Nav text="Contact" :icon="icons[3]" link="/dashboard/contact" />
        <Nav text="Add Product" :icon="icons[4]" link="/dashboard/addproduct" />
        <Nav text="View Product" :icon="icons[5]" link="/dashboard/products" />
        <Nav text="Add Branch" :icon="icons[6]" link="/dashboard/addbranch" />
        <Nav text="View Branch" :icon="icons[7]" link="/dashboard/branches" />
        <Nav text="Change Password" :icon="icons[8]" link="/dashboard/change" />
        <Nav
          text="Profile Settings"
          :icon="icons[9]"
          link="/dashboard/profile"
        />
        <a
          class="flex items-center px-4 py-2.5 space-x-3 rounded mb-3 hover:shadow-md hover:bg-violet-100 cursor-pointer"
          @click="logout"
        >
          <img class="w-6 h-6 mt-0.5" :src="icons[10]" alt="logout" />
          <span class="text-xl">Sign Out</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import Nav from "./Nav.vue";
import { signOut, getAuth } from "@firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const route = useRouter();

const icons = [
  "https://img.icons8.com/pastel-glyph/64/000000/add-male-user.png",
  "https://img.icons8.com/ios-glyphs/90/000000/user-group-man-woman.png",
  "https://img.icons8.com/ios-glyphs/90/000000/topic.png",
  "https://img.icons8.com/ios/100/000000/contact-card.png",
  "https://img.icons8.com/ios-filled/100/000000/in-inventory.png",
  "https://img.icons8.com/ios/100/000000/furniture.png",
  "https://img.icons8.com/pastel-glyph/64/000000/branching-arrows--v2.png",
  "https://img.icons8.com/ios-glyphs/90/000000/link-company-parent.png",
  "https://img.icons8.com/ios-glyphs/90/000000/re-enter-pincode.png",
  "https://img.icons8.com/pastel-glyph/64/000000/user-settings.png",
  "https://img.icons8.com/material/96/000000/exit.png",
];

const logout = () => {
  signOut(auth).then(() => {
    localStorage.removeItem("isLogin");
    route.push("/");
  });
};
</script>

<style lang="scss" scoped></style>
