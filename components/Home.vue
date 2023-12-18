<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "~/stores/user";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const userStore = useUserStore();
let isLoading = ref(true);

onMounted(async () => {
  await userStore.fetchProducts();
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <h1
    class="container flex w-full justify-center font-dosis text-5xl font-bold"
  >
    PRODUCTS
  </h1>
  <div
    v-if="!isLoading"
    class="container my-20 grid grid-cols-1 gap-10 p-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-9"
  >
    <div
      class="flex items-center justify-center"
      v-for="products in userStore.products"
      :key="products.id"
    >
      <ProductComponent class="" :product="products" />
    </div>
  </div>
  <loading :active="isLoading" :is-full-page="true" />
</template>

<style scoped lang="scss"></style>
