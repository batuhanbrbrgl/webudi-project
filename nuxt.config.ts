import * as fs from "fs";
const isSecure = fs.existsSync("./ssl.key");
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/image-edge",
  ],
  tailwindcss: {
    // Options
  },
  typescript: {
    shim: false,
    strict: true,
  },
  app: {
    head: {
      titleTemplate: "%s - Richardson & Co.",
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
          name: "description",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          property: "og:url",
          content: "",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Lorem",
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
          content: "",
        },
        {
          property: "twitter:url",
          content: "",
        },
        {
          name: "twitter:title",
          content: "Lorem",
        },
        {
          name: "twitter:site",
          content: "",
        },
       
        {
          name: "twitter:description",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
        },
        {
          name: "twitter:image",
          content: "",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "favicon/site.webmanifest" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "favicon/apple-touch-icon.png",
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
