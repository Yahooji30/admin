<template>
  <div class="bg-gray-50">
    <HeroSection />
    <AboutUs />
    <Services />
    <Steps />
    <Team />
    <Gallery />
    <Branches/>
    <ContactUs />
    <Footer />
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
import Team from "../components/Team.vue";
import ContactUs from "../components/ContactUs.vue";
import Footer from "../components/Footer.vue";
import Gallery from "../components/Gallery.vue";
import Services from "../components/Services.vue";
import Steps from "../components/Steps.vue";
import AboutUs from "../components/AboutUs.vue";
import Branches from "../components/Branches.vue";

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
.customFont {
  font-family: "Nunito", sans-serif;
}
</style>
