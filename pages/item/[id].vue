<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
import { watchEffect, onMounted, ref, computed } from "vue";
import { toast } from 'vue3-toastify';
import { defineProps, toRefs } from "vue";
import 'vue3-toastify/dist/index.css';
import { useUserStore } from "~/stores/user";
import { useRoute } from "vue-router";
import axios from "axios";
const route = useRoute();
const userStore = useUserStore();
let currentImage = ref("null");
let products = ref({});

const addToCart = () => {
  userStore.cart.push(products.value);
  toast("Ürün sepete eklendi.", { autoClose: 2000, type: "success" });
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



const removeFromCart = () => {
  const productId = products.value.id; // products.value'yi kontrol et
  const index = userStore.cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    userStore.cart.splice(index, 1);
  }
  toast("Ürün sepetten çıkarıldı.", { autoClose: 2000, type: "success" });
};

const countInCart = computed(() => {
  if (!products.value || !products.value.id) {
    return 0; // ya da başka bir varsayılan değer
  }
  return userStore.cart.filter((item) => item.id === products.value.id).length;
});

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
const changeImage = (image: string) => {
  if (products.value && products.value.images) {
    currentImage.value = image;
  }
};

const priceComputed = computed(() => {
  return "26.40";
});

</script>
<template>
  <MainLayout>
    <div id="ItemPage" class="mx-auto min-h-screen font-dosis max-w-[1200px] px-2">
      <div class="mx-auto w-full flex  justify-center gap-4 md:flex">
        <div class="my-32 flex flex-col md:flex-row">

        <div class="md:h-[%40] md:w-[40%]">
          <img
            v-if="products && products.images && products.images[0]"
            class="h-[400px] w-[500px] border-2 border-gray-500 rounded-lg object-cover"
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
                :class="currentImage === image ? 'border-gray-500' : ''"
                :src="image"
              />
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-gray-300 p-3 md:w-[60%]">
          <div v-if="products">
            <p class="mb-2">{{ products.title }}</p>
            <p class="mb-2 text-[12px] font-light">
              {{ products.description }}
            </p>

            <div class="border-b" />

            <div class="my-2 flex items-center justify-start gap-2">
              <div class="text-xl font-bold">$ {{ products.price }}</div>
             
            </div>

            <div class="py-2" />

            
            <div
            class="top-1 z-50 mt-3 flex h-10 flex-row items-center justify-center rounded-b-lg bg-gray-500 text-center hover:text-gray-200"
          >
            <div class="flex">
              <div
                v-if="countInCart > 0"
                id="count"
                class="flex flex-row space-x-4 text-center"
              >
                <div class="w-4">
                  <button
                    @click="addToCart"
                    class="w-full rounded-lg duration-300 hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <div class="w-8 text-center">
                  <span>{{ countInCart }}</span>
                </div>
                <div class="w-4">
                  <button
                    @click="removeFromCart"
                    class="w-full rounded-lg duration-300 hover:bg-gray-400"
                  >
                    -
                  </button>
                </div>
              </div>
              <div v-else class="flex flex-col space-x-4 text-center">
                <Icon
                  class="w-full rounded-xl cursor-pointer p-1 duration-300 hover:bg-gray-400"
                  name="ph:basket"
                  color="#fff"
                  size="30"
                  @click="addToCart"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  </MainLayout>
</template>
