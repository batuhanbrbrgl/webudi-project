<script setup lang="ts">
const props = defineProps<{
  image: string;
  text: string;
}>();
</script>
<template>
  <div class="">
    <div
      class="relative flex aspect-background min-h-[390px] w-full items-center justify-center md:h-full"
    >
      
      <nuxt-picture
          class="w-full h-full absolute"
          :imgAttrs="{ class: 'w-full h-full object-cover' }"
          :src="props.image"
          quality="100"
          loading="lazy"
        />

      <h1
        class="z-10 mx-9 flex w-full items-center font-extrabold text-center justify-center uppercase text-3xl text-white md:text-6xl" v-html="props.text"
      >
        
  </h1>
    </div>
  </div>
</template>
