<script setup lang="ts">
const bigCards = [
  {
    img: "/images/solut-power/solut-img.png",
    title: "SOLUTION PARTNERSHIP",
    text: "We offer customized solutions through partnership, collaborating and providing consultancy to help our customers achieve their business objectives effectively.",
  },
  {
    img: "/images/solut-power/proj-img.png",
    title: "PROJECT INVESTMENT",
    text: "Through strategic project investments, we support innovative ideas and talented teams to drive growth and success, aiming to create transformation and added value in the business landscape.",
  },
];
const powers = [
  {
    title: "OUR POTENTIAL INVESTMENT POWER",
  },
];
const sets = [
  {
    icon: "ic:baseline-supervised-user-circle",
    uppertext: "OUR NEARLY",
    boldtext: "100",
    semibold: "PARTNERS",
    text: "",
  },
  {
    icon: "solar:money-bag-bold",
    uppertext: "OUR INVESTMENT POWER EXCEEDING",
    boldtext: "$3 BILLION",
    semibold: "",
    text: "",
  },
  {
    icon: "material-symbols:factory-rounded",
    uppertext: "OUR EXPERIENCE OF ",
    boldtext: "100'S",
    semibold: "OF COMPANIES",
    text: "",
  },
  {
    icon: "streamline:money-cash-search-dollar-search-pay-product-currency-query-magnifying-cash-business-money-glass",
    uppertext: "OUR EXPERIENCE IN ",
    boldtext: "10'S",
    semibold: "OF SECTORS",
    text: "",
  },
  {
    icon: "mdi:worker",
    uppertext: "",
    boldtext: "1000'S",
    semibold: "",
    text: "OF EMPLOYMENT POWER",
  },
  {
    icon: "fontisto:earth",
    uppertext: "OUR INVESTMENT POWER IN",
    boldtext: "10 COUNTRIES",
    semibold: "",
    text: "",
  },
];
</script>
<template>
  <div class="relative z-20 -mt-20 mb-16">
    <div class="container mb-12 flex items-center justify-center">
      <div class="grid justify-items-center gap-7 py-8 md:grid-cols-2">
        <div
          v-for="items in bigCards"
          :key="items.title"
          class="flex max-w-lg flex-1 flex-col shadow-card"
        >
          <div
            class="relative flex aspect-[546/382] h-3/4 w-full grow items-center justify-center"
          >
            <img
              alt=""
              class="absolute left-0 top-0 -z-10 block h-full w-full object-cover"
              :src="items.img"
            />
            <h2
              class="relative z-10 p-4 text-center text-4xl font-extrabold text-white lg:text-5xl"
            >
              {{ items.title }}
            </h2>
          </div>
          <p
            class="flex w-full items-center justify-center bg-white p-3 text-center text-sm text-black1 md:h-1/4 md:p-2 lg:text-base"
          >
            {{ items.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <img
        alt=""
        class="absolute left-0 top-0 -z-10 hidden h-full w-full md:block"
        src="/images/solut-power/power-img.png"
      />
      <img
        alt=""
        class="absolute left-0 top-0 -z-10 h-full w-full md:hidden"
        src="/images/solut-power/power-img-mb.png"
      />
      <div class="container py-10">
        <h2 class="mb-10 text-center text-5xl text-black1">
          {{ powers[0].title }}
        </h2>
        <div
          class="grid grid-cols-1 justify-items-center gap-16 md:grid-cols-3"
        >
          <div
            v-for="(items, index) in sets"
            :key="index"
            class="flex flex-col items-center justify-center"
          >
            <icon class="mb-2 text-black1" :name="items.icon" size="48" />
            <p
              class="flex flex-col items-center justify-center text-center text-black1"
            >
              <span class="text-sm md:text-base">{{ items.uppertext }}</span>
              <span class="text-4xl font-extrabold">{{ items.boldtext }}</span>
              <span class="text-base font-extrabold">{{ items.semibold }}</span>
              <span class="text-sm md:text-base">{{ items.text }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
