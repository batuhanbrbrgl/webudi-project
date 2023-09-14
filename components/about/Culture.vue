<script setup lang="ts">
const cards: {
  id: number;
  image: string;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    image: "/images/about-us/culture.png",
    title: "CULTURE OF WORKING TOGETHER",
    description:
      "When different accumulations are combined with the right opportunities, it leads to the emergence of new initiatives. When existing initiatives and successful experiences come together, the power to do business increases. Istanbul Holding contributes to economic growth by bringing together the experience and capital power of its shareholders with new entrepreneurs.",
  },
  {
    id: 2,
    image: "/images/about-us/advanced.png",
    title: "ADVANCED AND INNOVATIVE INITIATIVES",
    description:
      "Istanbul Holding's vision is focused on new investment areas. It carries out studies on the identification, development and appreciation of strategically important, global opportunities and new investment areas.",
  },
  {
    id: 3,
    image: "/images/about-us/productions.png",
    title: "PRODUCTION AND EMPLOYMENT",
    description:
      "Established with the participation of partners, each of whom has shown great success in their field, Istanbul Holding A.Ş. supports the increase of production and qualified employment in Turkey with its initiatives in different sectors.",
  },
];
</script>
<template>
  <div
    class="mx-auto mt-10 flex h-full max-w-6xl items-center justify-center p-6 leading-6 md:mt-20"
  >
    <div class="h-full items-center justify-center space-y-8">
      <div class="space-y-3">
        <h4 class="text-3xl font-medium uppercase text-black1 md:text-4xl">
          About Us
        </h4>
        <div class="space-y-3 text-sm text-txt1 sm:text-lg md:text-base">
          <p>
            Istanbul Holding is an investment holding that accelerates the
            growth of innovative startups by investing and grows with the
            companies it invests in.
          </p>
          <p>
            Established with the equal shareholding of 100 leading partners in
            their sectors, Istanbul Holding brings together the power of
            experience and capital. It invests in sustainable companies by
            considering the needs and expectations of all stakeholders and
            shareholders. With the power of this togetherness, it aims to bring
            the companies it invests in to the highest level.
          </p>
          <p>
            Istanbul Holding's business model is based on value creation with
            operational and financial strategies that allow cooperation between
            fields of activity. With the capital and management power it
            creates, it provides opportunity advantage and rapid growth to the
            ventures it invests in.
          </p>
          <p>
            With its investment power and innovative management strategy
            provided by its multi-partnership structure, Istanbul Holding adds
            value to production and qualified employment power through
            initiatives. It opens to the world from Istanbul, where it bears its
            name, with its high-tech, participatory, innovative and sustainable
            business models.
          </p>
        </div>
      </div>

      <div class="flex w-full items-center justify-center">
        <div class="max-w-6xl">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="w-full bg-background1"
          >
            <div
              :class="
                card.id % 2 === 0
                  ? 'flex flex-col items-center md:flex-row-reverse'
                  : 'flex flex-col items-center md:flex-row'
              "
            >
              <div class="flex w-full items-center md:w-1/2">
                <div
                  class="relative mt-3 flex w-full items-center justify-center md:mt-0 md:h-[285px] lg:h-full"
                >
                  <nuxt-img
                    alt="culture"
                    class="h-full object-cover"
                    :src="card.image"
                  />
                  <h2
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-lg font-extrabold text-white sm:text-xl md:text-2xl lg:text-4xl"
                  >
                    {{ card.title }}
                  </h2>
                </div>
              </div>
              <div class="w-full md:mb-0 md:mt-0 md:w-1/2 md:pl-3 md:pr-3">
                <h1
                  class="mt-3 text-left text-base font-bold text-black1 sm:text-lg md:mt-0 md:text-xl lg:text-2xl"
                >
                  {{ card.title }}
                </h1>
                <p
                  class="mb-1 mt-1 text-left text-sm text-txt1 md:mt-2 md:text-base lg:text-lg"
                >
                  {{ card.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
