import * as fs from "fs";
const isSecure = fs.existsSync("./ssl.key");
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages : true,
  supabase: {
    redirect: false
  },
  googleFonts: {
    preconnect: true,
    download: true,
    inject: true,
    display: "swap",
    families: {
      Inter: true,
      Rubik: {
        wght: [300, 400, 500, 600, 700, 800, 900],
      },
      Dosis: {
        wght: [200, 300, 400, 500, 600, 700, 800],
      },
    },
  },
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxt/image",

  ],
  tailwindcss: {
    // Options
  },
  typescript: {
    shim: false,
    strict: true,
  },
  runtimeConfig: {
    public:{
      stripePk: process.env.STRIPE_KEY,
    }
   
  },
 
  app: {
    head: {
      script: [
        {
          src: "https://js.stripe.com/v3/",
          defer: true,
        },
      ],
      titleTemplate: "Batushop",
      meta: [
        {
          name: "msapplication-TileColor",
          content: "#00A3E0",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
        {
          name: "Webudi",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          property: "og:url",
          content: "webudi.vercel.app",
        },
        {
          property: "og:type",
          content: "webudi.vercel.app",
        },
        {
          property: "og:title",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          property: "og:description",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          property: "og:image",
          content: "",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:domain",
          content: "webudi.vercel.app",
        },
        {
          property: "twitter:url",
          content: "webudi.vercel.app",
        },
        {
          name: "twitter:title",
          content: "Lorem",
        },
        {
          name: "twitter:site",
          content: "webudi.vercel.app",
        },
       
        {
          name: "twitter:description",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
        },
        {
          name: "twitter:image",
          content: "webudi.vercel.app",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "apple-touch-icon.png",
        },
      ],
    },
  },
  vite: {
    server: isSecure
      ? {
          https: {
            key: fs.readFileSync("./ssl.key"),
            cert: fs.readFileSync("./ssl.crt"),
          },
          hmr: {
            protocol: "wss",
          },
        }
      : {},
    logLevel: "info",
    optimizeDeps: {
      include: ["@headlessui/vue", "vue", "pinia"],
    },
  },
});