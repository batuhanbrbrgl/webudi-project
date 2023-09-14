<script setup lang="ts">
import { useRoute } from "#imports";
const route = useRoute();
const menuOpen = ref(false);
const dropdownOpen = ref([false]);
const toggleDropdown = (index: any): any => {
  dropdownOpen.value.forEach((_, i) => {
    if (i !== index) {
      dropdownOpen.value[i] = false;
    }
  });
  dropdownOpen.value[index] = !dropdownOpen.value[index];
};
const checkActive = (path: string) => {
  return route.path === path;
};
const menu = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "INSTITUTIONAL",
    path: "#",
    dropdown: [
      {
        name: "ABOUT US",
        path: "/about",
      },
      {
        name: "OUR VALUES",
        path: "/about",
      },
      {
        name: "CAREEER",
        path: "/career",
      },
    ],
  },
  {
    name: "FIELDS OF ACTIVITY",
    path: "#",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];
const MobileMenuToggle = () => {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
if (process.client) {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menuOpen.value = false;
      document.body.style.overflow = "auto";
    }
  });
}
</script>
<template>
  <div class="relative z-50 bg-white py-4">
    <nav class="container">
      <ul class="flex items-center justify-between">
        <li>
          <nuxt-link class="flex items-center" to="/">
            <nuxt-picture
              alt="logo"
              class="mr-2 object-cover"
              :img-attrs="{
                class: 'min-w-[200px]',
              }"
              quality="100"
              src="/images/logo.png"
            />
          </nuxt-link>
        </li>
        <li class="md:hidden" @click="MobileMenuToggle()">
          <icon v-if="!menuOpen" name="bx:menu-alt-right" size="32" />
          <icon v-else name="material-symbols:close-rounded" size="32" />
        </li>
        <li class="hidden md:block">
          <ul class="flex items-center justify-between">
            <li v-for="item in menu" :key="item.name">
              <nuxt-link
                class="relative mx-2 text-black1"
                :class="
                  checkActive(item.path)
                    ? 'font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-black1'
                    : ''
                "
                :to="item.path"
              >
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
      <Transition mode="default" name="mobile">
        <div
          v-if="menuOpen"
          class="absolute left-0 top-full z-50 h-[calc(100vh-100%)] w-full"
        >
          <div class="h-full bg-white">
            <ul class="flex h-full flex-col items-end">
              <li
                v-for="(item, index) in menu"
                :key="item.name"
                class="w-full py-4"
              >
                <div
                  class="flex w-full flex-row items-center justify-between px-10"
                >
                  <nuxt-link
                    class="relative mx-2 text-black1"
                    :class="
                      checkActive(item.path)
                        ? 'font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-black1'
                        : ''
                    "
                    :to="item.path"
                  >
                    {{ item.name }}
                  </nuxt-link>
                  <div>
                    <Icon
                      v-if="item.dropdown && !dropdownOpen[index]"
                      class="h-5 w-5 cursor-pointer"
                      name="mi:add"
                      @click="toggleDropdown(index)"
                    />
                    <Icon
                      v-else-if="item.dropdown && dropdownOpen[index]"
                      class="h-5 w-5 cursor-pointer"
                      name="mi:remove"
                      @click="toggleDropdown(index)"
                    />
                  </div>
                </div>
                <transition name="dropdown">
                  <ul
                    v-if="item.dropdown && dropdownOpen[index]"
                    class="dropdown-mobile-menu space-y-0.5"
                  >
                    <li
                      v-for="(dropdownItem, i) in item.dropdown"
                      :key="i"
                      class="mx-2 bg-txt1/10 px-10"
                    >
                      <NuxtLink
                        v-if="dropdownItem.path.charAt(0) === '/'"
                        class="text-txt hover:text-blue block py-2"
                        :to="dropdownItem.path"
                        @click="menuOpen && MobileMenuToggle()"
                      >
                        {{ dropdownItem.name }}
                      </NuxtLink>
                      <NuxtLink
                        v-else
                        class="text-txt hover:text-blue block py-2"
                        target="_blank"
                        :to="dropdownItem.path"
                        @click="menuOpen && MobileMenuToggle()"
                      >
                        {{ dropdownItem.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </nav>
  </div>
</template>
<style>
.mobile-enter-active,
.mobile-leave-active {
  transition: 500ms ease all;
}

.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: 400ms ease all;
}

.dropdown-enter-to,
.dropdown-leave-from {
  max-height: 100vh;
  overflow: hidden;
}

.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
