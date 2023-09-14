<script setup lang="ts">
const props = defineProps<{
 
  image: string;
  text: string;
}>();
</script>
<template>
  <div
    class="container -mt-20 flex flex-col items-center justify-center space-x-2 md:mt-20 md:flex-row lg:space-x-10"
  >
    <div
      class="z-0 flex h-48 w-48 items-center justify-center rounded-full bg-blue1"
    >
      
      <nuxt-picture
          class="p-10"
          :imgAttrs="{ class: '' }"
          :src="props.image"
        />
    </div>

    <div class="mt-10 md:mb-0 mb-20 flex md:w-3/4 items-center text-txt1 md:mt-0">
      <p v-html="props.text"></p>
    </div>
  </div>
</template>
