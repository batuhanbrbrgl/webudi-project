<script setup>
import { useUserStore } from "~/stores/user";
import { computed } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const userStore = useUserStore();
const showElectronicMenu = ref(false);
const showCosmeticMenu = ref(false);
const user = useSupabaseUser();
const client = useSupabaseClient();
const isLoggedin = computed(() => user.value?.aud === "authenticated");

const goTo = (url) => {
  userStore.isMenuOverlay = true;
  return navigateTo(`/${url}`);
};

const goToElectronic = () => {
  userStore.isMenuOverlay = false;
  return navigateTo("/electronics");
};

const goToCosmetics = () => {
  userStore.isMenuOverlay = false;
  return navigateTo("/cosmetic");
};

const goToSmartphones = () => {
  userStore.isMenuOverlay = false;
  return navigateTo("/smartphones");
};

const goToLaptops = () => {
  userStore.isMenuOverlay = false;
  return navigateTo("/laptops");
};

const goToFragrances = () => {
  userStore.isMenuOverlay = false;
  return navigateTo("/fragrances");
};
const goToSkincare = () => {
  userStore.isMenuOverlay = false;
  return navigateTo("/skincare");
};

const toggleElectronicMenu = () => {
  showElectronicMenu.value = !showElectronicMenu.value;
};

const toggleCosmeticMenu = () => {
  showCosmeticMenu.value = !showCosmeticMenu.value;
};

const signOut = () => {
  client.auth.signOut();
  toast("The exit was carried out successfully.", { autoClose: 3000, type: "success" });
  userStore.isMenuOverlay = false;
  return navigateTo("/");
};
const signIn = () => {
  userStore.isMenuOverlay = false;
  return navigateTo("/login");
};
</script>
<template>
  <div
    id="MenuOverlay"
    class="fixed bottom-0 z-50 h-full w-full bg-white px-3 font-dosis"
  >
    <div class="flex items-center justify-between py-5">
      <NuxtLink to="/" @click="userStore.isMenuOverlay = false">
        <img width="170" src="/logo.png" />
      </NuxtLink>

      <button
        @click="userStore.isMenuOverlay = false"
        class="rounded-full p-1 hover:bg-gray-200"
      >
        <Icon name="mdi:close" size="30" />
      </button>
    </div>
    <div class="flex items-center justify-between pt-5">
      <ul class="w-full">
        <li
          @click="
            goTo('shoppingcart');
            userStore.isMenuOverlay = false;
          "
          class="relative flex cursor-pointer items-center justify-between border-b px-3 py-2.5 hover:bg-gray-100"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="ph:shopping-cart-simple-light" size="33" />
            <span class="pl-4">Cart</span>
          </div>
          <div
            class="flex h-[35px] min-w-[35px] items-center justify-center rounded-full bg-[#FF4646] text-lg text-white"
          >
            {{ userStore.cart.length }}
          </div>
        </li>
        <li
          class="relative flex cursor-pointer items-center justify-between border-b px-3 py-2.5 hover:bg-gray-100"
        >
          <div
            @click="goToElectronic"
            class="flex items-center text-[20px] font-semibold"
          >
            <Icon name="fluent:phone-laptop-16-regular" size="33" />
            <span class="pl-4">Electronic</span>
          </div>
          <button @click.stop="toggleElectronicMenu">
            <Icon name="mdi:chevron-right" size="33" />
          </button>
        </li>
        <ul v-if="showElectronicMenu">
          <li
            @click="goToSmartphones"
            class="relative flex cursor-pointer items-center justify-between border-b px-8 py-2.5 hover:bg-gray-100"
          >
            Smartphones
          </li>
          <li
            @click="goToLaptops"
            class="relative flex cursor-pointer items-center justify-between border-b px-8 py-2.5 hover:bg-gray-100"
          >
            Laptops
          </li>
        </ul>
        <li
          class="relative flex cursor-pointer items-center justify-between border-b px-3 py-2.5 hover:bg-gray-100"
        >
          <div
            @click="goToCosmetics"
            class="flex items-center text-[20px] font-semibold"
          >
            <Icon name="solar:cosmetic-bold-duotone" size="33" />
            <span class="pl-4">Cosmetic</span>
          </div>
          <button @click.stop="toggleCosmeticMenu">
            <Icon name="mdi:chevron-right" size="33" />
          </button>
        </li>

        <ul v-if="showCosmeticMenu">
          <li
            @click="goToFragrances"
            class="relative flex cursor-pointer items-center justify-between border-b px-8 py-2.5 hover:bg-gray-100"
          >
            Fragrances
          </li>
          <li
            @click="goToSkincare"
            class="relative flex cursor-pointer items-center justify-between border-b px-8 py-2.5 hover:bg-gray-100"
          >
            Skincare
          </li>
        </ul>
        <li
          @click="
            goTo('groceries');
            userStore.isMenuOverlay = false;
          "
          class="relative flex cursor-pointer items-center justify-between border-b px-3 py-2.5 hover:bg-gray-100"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="arcticons:ourgroceries" size="33" />
            <span class="pl-4">Groceries</span>
          </div>
        </li>
        <li
          @click="
            goTo('home-decoration');
            userStore.isMenuOverlay = false;
          "
          class="relative flex cursor-pointer items-center justify-between border-b px-3 py-2.5 hover:bg-gray-100"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="teenyicons:desklamp-outline" size="33" />
            <span class="pl-4">Home Decoration</span>
          </div>
        </li>
        <li
          v-if="isLoggedin"
          @click="
            goTo('profile');
            userStore.isMenuOverlay = false;
          "
          class="relative flex cursor-pointer items-center justify-between border-b px-3 py-2.5 hover:bg-gray-100"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="et:profile-male" size="33" />
            <span class="pl-4">Profile</span>
          </div>
        </li>

        <li
          v-if="isLoggedin"
          @click="
            signOut();
            userStore.isMenuOverlay = false;
          "
          class="relative flex cursor-pointer items-center justify-between border-b px-3 py-2.5 hover:bg-gray-100"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="ph:sign-out-light" size="33" />
            <span class="pl-4">Sign out</span>
          </div>
        </li>

        <li
          v-else
          @click="
            signIn();
            userStore.isMenuOverlay = false;
          "
          class="relative flex cursor-pointer items-center justify-between border-b px-3 py-2.5 hover:bg-gray-100"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="ph:sign-in-light" size="33" />
            <span class="pl-4">Sign in / Register</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
