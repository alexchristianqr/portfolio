<template>
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1 class="pb-0 mb-0">{{ selectedLanguage.SectionMe.h1 }}</h1>
      <p class="text-white m-0 pt-2 pb-2">{{ selectedLanguage.SectionMe.p }} <span class="typed" :data-typed-items="selectedLanguage.SectionMe.span"></span></p>
    </div>
  </section>
</template>

<script setup>
import { globalMixin } from "../../mixins/index.js";
const { selectedLanguage } = globalMixin();
</script>

<style scoped></style>
