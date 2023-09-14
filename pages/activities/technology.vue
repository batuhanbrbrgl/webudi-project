<script setup lang="ts">
const technologytext = ref<string>("INFORMATION AND<br>TECHNOLOGY");
const technologyText = ref<string>(
  "In recent years, a rapid growth has been observed in the energy sector in Turkey, especially with the increase in the demand for renewable energy investments. Approximately 80 percent of this capacity is expected to be provided by solar and wind energy. <br> <br>  From this point of view, it would not be wrong to say that the importance of green energy will gradually increase. Istanbul Holding A.S. As we, we support the targets of increasing the energy supply of our country and reducing foreign dependency in energy by contributing to the financing of investments, new projects and Start-Ups that have Renewable Energy production licenses."
);
definePageMeta({
  title: "Information and Technology",
});
useHead({
  title: "Information and Technology",
});
</script>
<template>
  <div>
    <Hero :text="technologytext" image="/images/background/technology.png" />
    <BlogText
      image="/images/blogtext/technology-blog.png"
      :text="technologyText"
    />
  </div>
</template>
