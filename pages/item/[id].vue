<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
import { watchEffect, onMounted, ref, computed } from "vue";
import { useUserStore } from "~/stores/user";
import { useRoute } from "vue-router";
import axios from "axios";
const route = useRoute();
let products = ref([]);
const userStore = useUserStore();
let currentImage = ref("null");
const addToCart = () => {
  userStore.cart.push(products.value);
};
const changeImage = (image: string) => {
  if (products.value && products.value.images) {
    currentImage.value = image;
  }
};

async function fetchProducts() {
  userStore.isLoading = true;
  const response = await axios.get(
    `https://dummyjson.com/products/${route.params.id}`
  );
  products.value = response.data;
  if (products.value && products.value.images && products.value.images[0]) {
    currentImage.value = products.value.images[0];
  }
  setTimeout(() => (userStore.isLoading = false), 1000);
}

fetchProducts();
const isInCart = computed(() => {
  let res = false;
  userStore.cart.forEach((prod) => {
    if (route.params.id == prod.id) {
      res = true;
    }
  });
  return res;
});

const priceComputed = computed(() => {
  return "26.40";
});
</script>
<template>
  <MainLayout>
    <div id="ItemPage" class="mx-auto mt-4 max-w-[1200px] px-2">
      <div class="mx-auto w-full justify-between gap-4 md:flex">
        <div class="md:h-[%40] md:w-[40%]">
          <img
            v-if="products && products.images && products.images[0]"
            class="h-[400px] w-[500px] rounded-lg object-cover"
            :src="currentImage"
          />
          <div
            v-if="products && products.images && products.images.length > 0"
            class="mt-2 flex items-center justify-center"
          >
            <div v-for="image in products.images" :key="image">
              <img
                @mouseover="changeImage(image)"
                @click="changeImage(image)"
                width="70"
                class="h-20 w-20 cursor-pointer rounded-md border-[3px] object-cover"
                :class="currentImage === image ? 'border-[#FF5353]' : ''"
                :src="image"
              />
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-white p-3 md:w-[60%]">
          <div v-if="products">
            <p class="mb-2">{{ products.title }}</p>
            <p class="mb-2 text-[12px] font-light">
              {{ products.description }}
            </p>

            <div class="border-b" />

            <div class="my-2 flex items-center justify-start gap-2">
              <div class="text-xl font-bold">$ {{ products.price }}</div>
              <span
                class="rounded-sm border bg-[#F5F5F5] px-1.5 text-[9px] font-semibold text-[#C08562]"
                >{{ products.discountPercentage }}% off</span
              >
            </div>

            <div class="py-2" />

            <button
              @click="addToCart()"
              :disabled="isInCart"
              class="rounded-lg bg-gradient-to-r from-[#FF851A] to-[#FFAC2C] px-6 py-2 text-lg font-semibold text-white"
            >
              <div v-if="isInCart">Is Added</div>
              <div v-else>Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
