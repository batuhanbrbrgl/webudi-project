<script setup lang="ts">
const items: {
  id: number;
  title: string;
  text: string;
  path: string;
  img: string;
}[] = [
  {
    id: 1,
    title: "Energy",
    text: "We provide sustainable energy solutions for a greener future.",
    path: "/activities/energy",
    img: "/images/activity-fields/energy.png",
  },
  {
    id: 2,
    title: "Construction and Real Estate",
    text: "We fulfill your dreams with high-quality construction projects.",
    path: "/activities/real-estate",
    img: "/images/activity-fields/real-estate.png",
  },
  {
    id: 3,
    title: "Food, Agriculture and Livestock",
    text: "We operate in the agriculture and livestock sector to produce healthy and natural foods.",
    path: "/activities/agriculture",
    img: "/images/activity-fields/agriculture.png",
  },
  {
    id: 4,
    title: "Logistics",
    text: "We offer fast, reliable, and efficient logistics solutions.",
    path: "/activities/logistic",
    img: "/images/activity-fields/logistic.png",
  },
  {
    id: 5,
    title: "Information and Technology",
    text: "We are at the forefront of the business world with innovation and technology.",
    path: "/activities/technology",
    img: "/images/activity-fields/it.png",
  },
  {
    id: 6,
    title: "Foreign Trade",
    text: "We create international collaborations and trade opportunities in the global market.",
    path: "/activities/foreign-trade",
    img: "/images/activity-fields/trade.png",
  },
];
</script>
<template>
  <div class="container mb-24 flex flex-col items-center space-y-4">
    <h1 class="text-4xl font-black text-blue1">FIELDS OF ACTIVITY</h1>
    <p class="max-w-5xl text-center text-txt1">
      Our diverse holding company excels in energy, construction, food,
      logistics, technology, and international trade. We specialize in
      sustainable energy, high-quality construction, and healthy food
      production. With our expertise in logistics and technology, we create
      trade opportunities globally, delivering exceptional value across our
      operations.
    </p>
    <div
      class="grid w-full grid-cols-1 justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="card in items"
        :key="card.id"
        class="flex w-full flex-col items-center justify-between bg-white"
      >
        <nuxt-picture
          class="w-full"
          :img-attrs="{ class: 'w-full object-cover' }"
          quality="100"
          loading="lazy"
          
          :src="card.img"
        />
        <div class="flex flex-col items-center justify-between space-y-3 p-4">
          <p class="text-lg font-extrabold uppercase text-black1">
            {{ card.title }}
          </p>
          <p class="text-center text-sm text-txt1">
            {{ card.text }}
          </p>
        </div>
        <nuxt-link
          class="mx-auto mb-4 bg-blue1 px-4 py-2 font-bold text-white"
          :to="card.path"
        >
          MORE DETAIL
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
