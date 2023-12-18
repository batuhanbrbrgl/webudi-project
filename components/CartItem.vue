<script setup lang="ts">
import { defineProps, defineEmits, ref, reactive, computed } from "vue";
import { useUserStore } from "~/stores/user";
import showToast from "~/composables/vue3-toastify";
const userStore = useUserStore();

const props = defineProps<{
  product: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
  };
}>();

const product = ref(props.product);
const cart = reactive(userStore.cart);

const addToCart = () => {
  cart.push(product.value);
  showToast("The product has been added.", "success");
};

const removeFromCart = () => {
  const index = cart.findIndex((item) => item.id === product.value.id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  showToast("The product has been deleted.", "success");
};

const countInCart = computed(() => {
  return cart.filter((item) => item.id === product.value.id).length;
});
const deleteAllItems = () => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.value.id) {
      cart.splice(i, 1);
      i--;
    }
  }
  showToast("The product has been removed.", "success");
};
</script>

<template>
  <div class="my-2 flex justify-start">
    <img class="w-[90px] rounded-md md:w-[150px]" :src="product.thumbnail" />

    <div class="flex w-full justify-between overflow-hidden pl-2">
      <div class="flex w-full items-center justify-between">
        <div class="flex w-2/3 items-center justify-between truncate">
          <div class="truncate sm:pl-2">{{ product.title }}</div>
        </div>
      </div>

      <div
        class="flex items-center justify-center text-center text-xl font-semibold"
      >
        <span class="font-bold">${{ product.price * countInCart }}</span>
      </div>

      <div class="flex items-center justify-end">
        <button
          @click="removeFromCart()"
          class="mx-3 -mt-0.5 block hover:text-red-500"
        >
          <Icon name="material-symbols:remove" size="20" />
        </button>
        <span>{{ countInCart }}</span>
        <button
          @click="addToCart()"
          class="mx-3 -mt-0.5 block hover:text-red-500"
        >
          <Icon name="material-symbols:add" size="20" />
        </button>
        <button
          @click="deleteAllItems()"
          class="mx-3 -mt-0.5 hidden hover:text-red-500 sm:block"
        >
          <Icon name="material-symbols:delete-outline" size="20" />
        </button>
      </div>
    </div>
  </div>
</template>
