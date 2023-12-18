<script setup lang="ts">
import { useUserStore } from "~/stores/user";
import { computed } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const userStore = useUserStore();
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();
let isScrolled = ref(false);
let isAccountMenu = ref(false);
let isElectronicsMenu = ref(false);
let isCosmeticMenu = ref(false);

const isCartHover = ref(false);
let cartItemCount = computed(() => userStore.cart.length);
const isLoggedin = computed(() => user.value?.aud === "authenticated");
async function logout() {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    router.push("/login");
    toast("Exit was successful.", { autoClose: 3000, type: "success" });
  } catch (error) {}
}
onMounted(() => {
  const checkScroll = () => {
    isScrolled.value = window.scrollY > 0;
  };

  window.addEventListener("scroll", checkScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", checkScroll);
  });
});
</script>
<template>
  <div id="MainLayout" class="relative z-50 w-full font-dosis">
    <div
      id="MainHeader"
      :class="{
        'bg-opacity-25': !isScrolled,
        'bg-opacity-100 ': isScrolled,
        fixed: true,
      }"
      class="top-0 z-50 flex w-full items-center bg-white"
    >
      <div
        class="mx-auto flex w-full max-w-[1150px] items-center justify-between gap-10 px-3 py-5"
      >
        <NuxtLink to="/" class="min-w-[170px]">
          <img width="170" src="/logo.png" />
        </NuxtLink>
        <div class="hidden flex-row whitespace-nowrap lg:flex">
          <li
            class="relative flex h-full cursor-pointer items-center justify-center px-3 transition-opacity duration-300 hover:bg-transparent hover:text-gray-700 hover:shadow-none"
            :class="
              isElectronicsMenu ? 'z-40 bg-white shadow-lg duration-300 ' : ''
            "
            @mouseenter="isElectronicsMenu = true"
            @mouseleave="isElectronicsMenu = false"
          >
            <router-link to="/electronics"> Electronic </router-link>

            <div
              v-if="isElectronicsMenu"
              class="absolute top-[23px] z-40 flex w-[110px] flex-col space-y-1 rounded-2xl border border-b border-gray-200 bg-white pb-2 pt-3 text-[#333333] shadow-2xl duration-300"
            >
              <NuxtLink
                to="/smartphones"
                class="w-full rounded-sm p-2 text-center text-[14px] font-medium text-gray-700 duration-300 hover:text-gray-500"
              >
                Smartphones
              </NuxtLink>
              <NuxtLink
                to="/laptop"
                class="w-full rounded-sm p-2 text-center text-[14px] font-medium text-gray-700 duration-300 hover:text-gray-500"
              >
                Laptop
              </NuxtLink>
            </div>
          </li>
          <li
            class="relative flex h-full cursor-pointer items-center justify-center px-3 transition-opacity duration-300 hover:bg-transparent hover:text-gray-700 hover:shadow-none"
            :class="
              isCosmeticMenu ? 'z-40 bg-white shadow-lg duration-300 ' : ''
            "
            @mouseenter="isCosmeticMenu = true"
            @mouseleave="isCosmeticMenu = false"
          >
            <router-link to="/cosmetic"> Cosmetic </router-link>

            <div
              v-if="isCosmeticMenu"
              class="absolute top-[23px] z-40 flex w-[110px] flex-col space-y-1 rounded-2xl border border-b border-gray-200 bg-white pb-2 pt-3 text-[#333333] shadow-2xl duration-300"
            >
              <NuxtLink
                to="/fragrances"
                class="w-full rounded-sm p-2 text-center text-[14px] font-medium text-gray-700 duration-300 hover:text-gray-500"
              >
                Fragrances
              </NuxtLink>
              <NuxtLink
                to="/skincare"
                class="w-full rounded-sm p-2 text-center text-[14px] font-medium text-gray-700 duration-300 hover:text-gray-500"
              >
                Skincare
              </NuxtLink>
            </div>
          </li>
          <NuxtLink
            to="/groceries"
            class="relative flex h-full cursor-pointer items-center justify-center px-3 transition-opacity duration-300 hover:text-gray-700"
          >
            Groceries
          </NuxtLink>
          <NuxtLink
            to="/home-decoration"
            class="relative flex h-full cursor-pointer items-center justify-center px-3 transition-opacity duration-300 hover:text-gray-700"
          >
            Home Decoration
          </NuxtLink>
        </div>

        <div class="flex flex-row items-center">
          <NuxtLink to="/shoppingcart" class="flex items-center">
            <button
              class="relative hidden lg:block"
              @mouseenter="isCartHover = true"
              @mouseleave="isCartHover = false"
            >
              <span
                class="absolute -right-[3px] top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-gray-500 px-0.5 text-xs text-white"
              >
                {{ cartItemCount }}
              </span>
              <div class="min-w-[40px]">
                <Icon
                  name="ph:shopping-cart-simple-light"
                  size="33"
                  :color="isCartHover ? 'gray-800' : ''"
                />
              </div>
            </button>
          </NuxtLink>
          <ul
            class="hidden h-10 items-center justify-end px-2 text-xs font-light text-[#333333] lg:block"
          >
            <li
              class="relative flex h-full cursor-pointer items-center justify-center rounded-xl px-3 transition-opacity duration-300 hover:text-gray-700"
              :class="isAccountMenu ? 'z-40 shadow-lg ' : ' '"
              @mouseenter="isAccountMenu = true"
              @mouseleave="isAccountMenu = false"
            >
              <Icon name="ph:user-thin" size="17" />
              <span v-if="isLoggedin">{{ user?.email }}</span>
              <span v-else>Account</span>
              <Icon name="mdi:chevron-down" size="15" class="ml-5" />
              <div
                id="AccountMenu"
                v-if="isAccountMenu"
                class="absolute top-[38px] z-40 w-[220px] rounded-xl border border-b bg-white px-2 pb-2 text-[#333333]"
              >
                <div v-if="true">
                  <div class="text-semibold my-3 px-3 text-center text-[15px]">
                    Welcome to Webudi
                  </div>
                </div>
                <div class="">
                  <ul class="bg-white">
                    <li
                      v-if="isLoggedin"
                      @click="navigateTo('/profile')"
                      class="w-full rounded-sm bg-gray-500 px-3 py-2 text-center text-[16px] font-semibold text-white duration-300 hover:bg-slate-900"
                    >
                      Profile
                    </li>
                    <div class="mb-1 flex items-center gap-1 px-3">
                      <NuxtLink
                        v-if="!isLoggedin"
                        to="/login"
                        class="w-full rounded-sm bg-gray-500 p-2 text-center text-[16px] font-semibold text-white duration-300 hover:bg-slate-900"
                      >
                        Login
                      </NuxtLink>
                      <NuxtLink
                        v-else
                        @click="logout"
                        to="/login"
                        class="w-full rounded-sm bg-gray-500 p-2 text-center text-[16px] font-semibold text-white duration-300 hover:bg-slate-900"
                      >
                        Logout
                      </NuxtLink>
                    </div>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <button
          @click="userStore.isMenuOverlay = true"
          class="-mt-[4px] block rounded-full p-1.5 hover:bg-gray-200 lg:hidden"
        >
          <Icon name="radix-icons:hamburger-menu" size="33" />
        </button>
      </div>
    </div>
  </div>
</template>
