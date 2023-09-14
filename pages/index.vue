<script setup lang="ts">
const investmentTitle = "Investment Power of<br>Togetherness";
definePageMeta({
  title: "Home",
});
useHead({
  title: "Home",
});

</script>
<template>
  <div class="">
    <Hero :text="investmentTitle" image="/images/Index.png" />
    <HomeSolutionAndPower />
    <HomeActivityFields />
  </div>
</template>
<style scoped lang="scss">
.test {
  color: red;
  span {
    @apply text-blue-500;
  }
}
</style>
