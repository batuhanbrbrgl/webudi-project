<script setup>
import { onMounted } from "vue";
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const userStore = useUserStore();
let isLoading = ref(true);

onMounted(async () => {
  await userStore.fetchGroceries();
});
setTimeout(() => {
  isLoading.value = false;
}, 1000);

</script>

<template>
  <MainLayout>
    <div class="relative mt-[91px]">
      <img
        class="my-7 h-[90px] w-full object-cover lg:my-0 lg:h-[337px]"
        src="/groceries.png"
        alt=""
      />
      <h1
        class="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center font-dosis text-6xl"
      >
        groceries
      </h1>
    </div>

    <div
      class="container my-20 grid grid-cols-1 gap-10 p-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-9"
    >
      <div
        class="flex items-center justify-center"
        v-for="groceries in userStore.groceries"
        :key="groceries.id"
      >
        <ProductComponent class="" :product="groceries" />
      </div>
    </div>
    <loading :active="isLoading" :is-full-page="true" />
  </MainLayout>
</template>
