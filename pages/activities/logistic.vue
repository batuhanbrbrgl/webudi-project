<script setup lang="ts">
const logistictext = ref<string>("LOGISTICS");
const logisticText = ref<string>(
  "In recent years, a rapid growth has been observed in the energy sector in Turkey, especially with the increase in the demand for renewable energy investments. Approximately 80 percent of this capacity is expected to be provided by solar and wind energy. <br> <br>  From this point of view, it would not be wrong to say that the importance of green energy will gradually increase. Istanbul Holding A.S. As we, we support the targets of increasing the energy supply of our country and reducing foreign dependency in energy by contributing to the financing of investments, new projects and Start-Ups that have Renewable Energy production licenses."
);
definePageMeta({
  title: "Logistic",
});
useHead({
  title: "Logistic",
});
</script>
<template>
  <div>
    <Hero :text="logistictext" image="/images/background/logistics.png" />
    <BlogText
      image="/images/blogtext/logistics-blog.png"
      :text="logisticText"
    />
  </div>
</template>
