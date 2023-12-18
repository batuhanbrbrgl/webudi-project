<script setup>
import { onMounted } from "vue";
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const userStore = useUserStore();
let isLoading = ref(true);

onMounted(async () => {
  await userStore.fetchSkincare();
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

</script>

<template>
  <MainLayout>
    <div class="relative mt-[91px]">
      <img
        class="my-7 h-[90px] w-full object-cover lg:my-0 lg:h-[337px]"
        src="/skincare.png"
        alt=""
      />
      <h1
        class="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center font-dosis text-6xl"
      >
        skincare
      </h1>
    </div>

    <div
      class="container my-20 grid grid-cols-1 gap-10 p-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-9"
    >
      <div
        class="flex items-center justify-center"
        v-for="skincare in userStore.skincare"
        :key="skincare.id"
      >
        <ProductComponent class="" :product="skincare" />
      </div>
    </div>
    <loading :active="isLoading" :is-full-page="true" />
  </MainLayout>
</template>

<style scoped lang="scss"></style>
