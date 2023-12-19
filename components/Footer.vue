<script setup lang="ts">
const footermenu = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "Electronic",
    path: "/electronics",
  },
  {
    name: "Cosmetic",
    path: "/cosmetic",
  },
  {
    name: "Home Decoration",
    path: "/home-decoration",
  },
];
const copyrightMenu = [
  { name: "TERMS & CONDITION", path: "/" },
  { name: "PRIVACY POLICY", path: "/" },
  { name: "SECURITY", path: "/" },
];
</script>
<template>
  <div class="w-full bg-white font-dosis">
    <div class="relative">
      <img
        alt=""
        class="absolute left-0 top-0 z-0 h-full w-full object-cover"
        src="@/assets/images/footer-bg.png"
      />
      <div class="absolute h-full w-full bg-white opacity-50"></div>
      <div
        class="container relative z-10 flex flex-col justify-between py-9 text-center md:flex-row md:text-left"
      >
        <div class="flex flex-col">
          <nuxt-link class="mx-auto flex items-center pb-4 md:mx-0" to="/">
            <nuxt-picture
              alt="logo"
              class="mr-2 object-cover"
              :img-attrs="{
                class: 'min-w-[250px]',
              }"
              quality="100"
              src="/logo.png"
            />
          </nuxt-link>
          <ul class="text-txt1 space-y-4">
            <li class="mx-auto max-w-sm md:mx-0">
              Adress: Lorem ipsum dolor sit amet consectetur. Dictum nullam
              ipsum condimentum consequat semper aliquam volutpat et in.
            </li>
            <li class="font-semibold">
              <a href="tel:+12345678900">+1 234 567 89 00</a>
            </li>
            <li class="font-semibold">
              <a href="mailto:info@webudi.com">info@webudi.com</a>
            </li>
          </ul>
        </div>
        <div class="text-txt1 flex flex-col justify-center">
          <ul>
            <li v-for="item in footermenu" :key="item.name">
              <nuxt-link
                class="py-[5px] uppercase leading-[19px]"
                :to="item.path"
              >
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="text-txt1 container flex flex-col-reverse items-center justify-center py-8 text-xs md:flex-row md:justify-between"
    >
      <p class="pt-4 md:pt-0">© 2023 Webudi All Rights Reserved</p>
      <ul class="flex space-x-4 text-center">
        <li v-for="item in copyrightMenu" :key="item.name">
          <nuxt-link class="px-1 md:px-[10px]" :to="item.path">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
