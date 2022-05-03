<template>
  <router-link :to="link" class="router-class">
    <img class="w-6 h-6 mt-0.5" :src="icon" :alt="text" />
    <span class="text-xl">{{ text }}</span>
  </router-link>
</template>

<script setup>
const props = defineProps({
  text: String,
  icon: String,
  link: String,
});

const { text, icon, link } = props;
</script>
<style scope>
.router-class {
  @apply flex items-center px-4 py-2.5 space-x-3 rounded mb-3 hover:shadow-md hover:bg-violet-100;
}
</style>
