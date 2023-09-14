<script setup lang="ts">
const aboutTitle = "ABOUT US";
definePageMeta({
  title: "About Us",
});
useHead({
  title: "About Us",
});
</script>
<template>
  <div>
    <Hero :text="aboutTitle" image="/images/about.png" />
    <AboutCulture />
  </div>
</template>
