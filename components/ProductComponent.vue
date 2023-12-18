<script setup lang="ts">
import { useUserStore } from "~/stores/user";
import { defineProps, toRefs, computed } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const props = defineProps<{
  product: {
    id: number;
    title: string;
    description: string;
    url: string;
    price: number;
    thumbnail: string;
  };
}>();

const { product } = toRefs(props);
const userStore = useUserStore();

const addToCart = () => {
  userStore.cart.push(product.value);
  toast("Product added to cart.", { autoClose: 2000, type: "success" });
};


const removeFromCart = () => {
  const index = userStore.cart.findIndex(
    (item) => item.id === product.value.id
  );
  if (index !== -1) {
    userStore.cart.splice(index, 1);
  }
  toast("Product removed from cart.", { autoClose: 2000, type: "success" });
};

const countInCart = computed(() => {
  return userStore.cart.filter((item) => item.id === product.value.id).length;
});

const priceComputed = computed(() => {
  return product.value.price;
});

const oldPriceComputed = computed(() => {
  let res = product.value.price + product.value.price * 0.2;
  return res.toFixed(2);
});

</script>

<template>
  <div class="group duration-300">
    <div
      :id="`ProductComponent${product.id}`"
      class="inline-block h-[370px] w-[250px] cursor-pointer rounded-lg bg-transparent font-dosis shadow-2xl duration-300 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-black"
    >
      <NuxtLink class="" :to="`/item/${product.id}`">
        <div class="relative">
          <div
            class="absolute z-20 h-[150px] w-[250px] rounded-xl bg-black opacity-20"
          ></div>
          <img
            class="relative z-0 h-[150px] w-[250px] rounded-xl shadow-2xl"
            :src="product.thumbnail"
          />
        </div>

        <div
          class="flex w-full flex-col justify-between space-y-2 px-2"
          id="ProductDetails "
        >
          <span
            class="flex h-14 items-center justify-start gap-3 px-1 pt-1 text-xl font-bold"
            >{{ product.title }}</span
          >
          <span class="flex items-center justify-start gap-3 px-1 pt-1">
            <span class="font-semibold text-gray-500"
              >${{ priceComputed }}</span
            >
            <span class="text-light text-sm text-gray-500 line-through"
              >${{ oldPriceComputed }}</span
            >
          </span>

          <span
            class="relative -top-1.5 px-1 text-xs font-semibold text-gray-500"
          >
            Extra 5% off
          </span>

          <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
            5,000+ sold
            <Icon
              name="material-symbols:star-rate"
              color="#757575"
              class="ml-1.5"
            />
            4.7
          </p>

          <p class="px-1 pt-0.5 text-xs text-[#252525]">
            {{ product.title.substring(0, 60) }}
          </p>
        </div>
      </NuxtLink>
      <div class="py-2">
        <NuxtLink
          :to="`/${product.category}`"
          class="mx-1 h-28 rounded-md bg-gray-200 px-3 py-1 capitalize duration-300 hover:bg-gray-500"
        >
          {{ product.category }}
        </NuxtLink>
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
</template>
