<script setup lang="ts">
const footermenu = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT US",
    path: "/about",
  },
  {
    name: "FIELDS OF ACTIVITY",
    path: "/",
  },
  {
    name: "OUR VALUES",
    path: "/",
  },
  {
    name: "CAREEER",
    path: "/",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];
const copyrightMenu = [
  { name: "TERMS & CONDITION", path: "/" },
  { name: "PRIVACY POLICY", path: "/" },
  { name: "SECURITY", path: "/" },
];
</script>
<template>
  <div class="mt-20 bg-white">
    <div class="relative">
      <img
        alt=""
        class="absolute left-0 top-0 z-0 h-full w-full object-cover"
        src="@/assets/images/footer-bg.png"
      />
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
              src="/images/logo.png"
            />
          </nuxt-link>
          <ul class="space-y-4 text-txt1">
            <li class="mx-auto max-w-sm md:mx-0">
              Adress: Lorem ipsum dolor sit amet consectetur. Dictum nullam
              ipsum condimentum consequat semper aliquam volutpat et in.
            </li>
            <li class="font-semibold">
              <a href="tel:+12345678900">+1 234 567 89 00</a>
            </li>
            <li class="font-semibold">
              <a href="mailto:info@whiterockcapital.com"
                >info@whiterockcapital.com</a
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-center text-txt1">
          <ul>
            <li v-for="item in footermenu" :key="item.name">
              <nuxt-link class="py-[5px] leading-[19px]" :to="item.path">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="container flex flex-col-reverse items-center justify-center py-8 text-xs text-txt1 md:flex-row md:justify-between"
    >
      <p class="pt-4 md:pt-0">© 2023 Whirerock capital All Rights Reserved</p>
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
