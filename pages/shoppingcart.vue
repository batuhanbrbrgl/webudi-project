<script setup lang="ts">
import { useUserStore } from "~/stores/user";
import MainLayout from "~/layouts/MainLayout.vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const userStore = useUserStore();
let cartItems = userStore.cart;

const acceptedTerms = ref(false);
const router = useRouter();
let selectedArray = ref([]);

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200);
});

const totalPriceComputed = computed(() => {
  let price = 0;
  cartItems.forEach((prod) => {
    price += prod.price;
  });
  return price;
});


const uniqueProducts = computed(() => {
  return Array.from(new Set(cartItems.map((item) => item.id))).map(
    (productId) => {
      const product = cartItems.find((item) => item.id === productId);
      return {
        ...product,
        quantity: cartItems.filter((item) => item.id === productId).length,
      };
    }
  );
});

const deleteAllItems = () => {
  cartItems.splice(0, cartItems.length);
  toast("Your Basket has Been Emptied.", { autoClose: 3000, type: "success" });
  router.push("/");
};
const checkout = () => {
  cartItems.splice(0, cartItems.length);
  router.push("/");
  setTimeout(() => {
      toast("Your pay has been Received.", { autoClose: 3000, type: "success" });
    }, 3000);
};

</script>

<template>
  <MainLayout>
    <div class="container font-dosis">
      <div id="ShoppingCartPage" class="mx-auto mt-[91px] px-2">
        <div
          v-if="!cartItems.length"
          class="-mt-[91px] flex min-h-screen items-center justify-center"
        >
          <div class="">
            <img class="mx-auto" width="250" src="/cart-empty.png" />
            <div class="mt-4 items-center justify-center text-center text-xl">
              No items yet?
            </div>
            <div class="flex w-full justify-center text-center">
              <NuxtLink
                to="/login"
                class="mt-4 w-full rounded-full bg-[#212024] p-1.5 text-[21px] font-semibold text-white"
              >
                Sign in
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          v-else
          class="mx-auto min-h-screen w-full justify-between gap-4 py-10 md:flex"
        >
          <div class="md:w-[65%]">
            <div class="rounded-lg bg-white p-4">
              <div class="mb-2 text-2xl font-bold">
                Shopping Cart ({{ cartItems.length }})
              </div>
              <button
                @click="deleteAllItems"
                class="mt-2 rounded bg-[#212024] px-2 py-1 text-white"
              >
                Delete Them All
              </button>
            </div>

            <div id="Items" class="mt-4 rounded-lg bg-white p-4">
              <div v-for="product in uniqueProducts" :key="product.id">
                <CartItem :product="product" />
              </div>
            </div>
          </div>

          <div class="my-4 block md:hidden" />
          <div class="md:w-[35%]">
            <div id="Summary" class="rounded-lg bg-white p-4">
              <div class="mb-2 text-2xl font-extrabold">Summary</div>
              <div class="my-4 flex items-center justify-between">
                <div class="font-semibold">Total</div>
                <div class="text-2xl font-semibold">
                  $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
                </div>
              </div>
              <div class="mt-4 space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  v-model="acceptedTerms"
                />
                <label for="terms">I accept the pay terms.</label>
              </div>
              <button
                @click="checkout"
                :disabled="!acceptedTerms"
                :class="{
                  'bg-gray-400': !acceptedTerms,
                  'bg-[#013220]': acceptedTerms,
                }"
                class="mt-4 flex w-full items-center justify-center rounded-full p-1.5 text-[21px] font-semibold text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
