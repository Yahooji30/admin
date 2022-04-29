<template>
  <div class="realative flex h-[100vh]">
    <!-- Sidebar -->
    <div class="bg-violet-50 text-black w-[18rem]">
      <div class="flex justify-start items-center py-4 mb-4 px-4 bg-violet-700">
        <img src="../assets/dot.png" class="w-7 h-7 mx-2 mt-1" />
        <span class="text-white text-3xl">DECORE</span>
      </div>
      <nav class="px-4">
        <Nav text="Add Members" icon="addMember.png" link="/dashboard" />
        <Nav text="All Members" icon="team1.png" link="/dashboard/members" />
        <Nav text="Messages" icon="message.png" link="/dashboard/messages" />
        <Nav text="Contact" icon="address.png" link="/dashboard/contact" />
        <Nav
          text="Add Branch"
          icon="addBranch.png"
          link="/dashboard/addbranch"
        />
        <Nav
          text="View Branch"
          icon="branches.png"
          link="/dashboard/branches"
        />
        <Nav
          text="Change Password"
          icon="change.png"
          link="/dashboard/change"
        />
        <Nav
          text="Profile Settings"
          icon="Profile.png"
          link="/dashboard/profile"
        />
        <a
          class="flex items-center px-4 py-2.5 space-x-3 rounded mb-3 hover:shadow-md hover:bg-violet-100 cursor-pointer"
          @click="logout"
        >
          <img
            class="w-6 h-6 mt-0.5"
            src="https://img.icons8.com/material/96/000000/exit.png"
            alt="logout"
          />
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

const logout = () => {
  signOut(auth).then(() => {
    localStorage.removeItem("isLogin");
    route.push("/");
  });
};
</script>

<style lang="scss" scoped></style>
