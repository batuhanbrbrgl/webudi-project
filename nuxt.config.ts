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
            "Webudi Batuhan Berberoğlu Project.",
        },
        {
          property: "og:url",
          content: "webudi-project.vercel.app",
        },
        {
          property: "og:type",
          content: "webudi-project.vercel.app",
        },
        {
          property: "og:title",
          content: "Webudi",
        },
        {
          property: "og:description",
          content:
            "Webudi Batuhan Berberoğlu Project.",
        },
        {
          property: "og:image",
          content: "https://webudi-project.vercel.app/og-image.png",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:domain",
          content: "webudi-project.vercel.app",
        },
        {
          property: "twitter:url",
          content: "webudi-project.vercel.app",
        },
        {
          name: "twitter:title",
          content: "Webudi",
        },
        {
          name: "twitter:site",
          content: "webudi-project.vercel.app",
        },
       
        {
          name: "twitter:description",
          content:
            "Webudi Batuhan Berberoğlu Project.",
        },
        {
          name: "twitter:image",
          content: "webudi-project.vercel.app",
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