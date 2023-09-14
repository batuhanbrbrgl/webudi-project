<script setup lang="ts">
function formSubmit(event: Event & { target: HTMLFormElement }) {
  const body = new FormData(event.target);
  useFetch(`/api/contactUs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
  return undefined;
}
</script>
<template>
  <div>
    <iframe
      height="420"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.9084623921451!2d9.991350021927122!3d53.55037704038787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f1b87accf2f%3A0x3f9d24afe84a0263!2sHamburg%20Belediye%20Saray%C4%B1!5e0!3m2!1str!2str!4v1684318196893!5m2!1str!2str"
      style="border: 0"
      width="100%"
    ></iframe>
    <div
      class="container flex flex-col space-y-12 pb-12 pt-5 text-txt1 lg:flex-row lg:space-y-0 lg:pt-20"
    >
      <div class="flex w-full flex-col space-y-5 lg:w-1/2">
        <h1 class="text-4xl">CONTACT US</h1>
        <p class="max-w-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          in numquam. Impedit voluptatem tenetur in inventore reiciendis ipsam
          laborum accusantium!
        </p>
        <strong class="">+1 234 567 890</strong>
        <span>info@whiterockcapital.com</span>
      </div>
      <ClientOnly>
        <form
          class="flex w-full flex-col space-y-4 lg:w-1/2"
          @submit.prevent="formSubmit"
        >
          <div class="flex flex-col space-y-1">
            <label class="" for="subject"> Your Message </label>
            <textarea
              class="w-full border border-txt1 bg-background1 px-6 py-5"
              name="desc"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="" for="subject"> Your Name </label>
            <input
              class="w-full border border-txt1 bg-background1 px-6 py-5"
              name="subject"
              type="text"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="" for="email"> E-mail </label>
            <input
              class="w-full border border-txt1 bg-background1 px-6 py-5"
              name="email"
              type="text"
            />
          </div>
          <div class="flex w-full justify-end">
            <button
              class="w-36 rounded-md bg-blue1 py-4 text-white duration-300 hover:shadow-2xl"
              type="submit"
            >
              SEND
            </button>
          </div>
        </form>
      </ClientOnly>
    </div>
  </div>
</template>
