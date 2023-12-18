<script setup lang="ts"></script>
<template>
  <div class="relative">
    <div class="hidden h-[100dvh] w-full lg:block">
      <video
      class="h-full w-full object-cover"
      loading="lazy"
      loop
      muted
      autoplay
      playsinline
      onclick="event.preventDefault()"
    >
        <source src="/videos/desktop-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="block h-[100dvh] w-full lg:hidden">
      <video
        class="h-full w-full object-cover"
        loading="lazy"
        loop
        muted
        autoplay
      >
        <source src="/videos/mobile-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <a
      href="#form-page"
      class="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 select-none flex-col items-center space-y-4 lg:bottom-10"
    >
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>

      <span class="text-xl tracking-[10px] lg:text-4xl">SCROLL</span>
    </a>
    <div
      class="absolute bottom-0 left-0 h-60 w-full bg-gradient-to-b from-[#120E2A00] to-[#00030C]"
    ></div>
  </div>
</template>
<style scoped>
.scroll-downs {
  position: absolute;
  top: -120px;
  right: 4px;
  bottom: 0;
  left: 0;
  margin: auto;

  width: 34px;
  height: 55px;
}
.mousey {
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
</style>
