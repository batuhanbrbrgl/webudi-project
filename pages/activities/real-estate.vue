<script setup lang="ts">
const realestatee = ref<string>("CONSTRUCTION AND<br>REAL ESTATE");
const realestate = ref<string>(
  "The construction and real estate sector, which is the locomotive of Turkey, has a significant share in the gross national product by creating demand for the production and service provision of more than 200 sub-sectors connected to it. <br> <br>  Istanbul Holding A.S. In this regard, it has shareholders who have very serious experience in international real estate development, construction application and marketing. We focus on making important contributions to Turkey's development and industrialization efforts with national and international global scale projects by coming together under the umbrella of the Holding and joining forces."
);
definePageMeta({
  title: "Construction and Real Estate",
});
useHead({
  title: "Construction and Real Estate",
});
</script>
<template>
  <div>
    <Hero :text="realestatee" image="/images/background/real-estate.png" />
    <BlogText image="/images/blogtext/realestate-blog.png" :text="realestate" />
  </div>
</template>
