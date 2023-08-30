// ./nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ["/", "/blog"],
    },
  },
  routeRules: {
    "/products/**": { ssr: true },
    "/checkout/**": { ssr: false },
  },
  css: ["~/assets/css/main.css", "vue-toastification/dist/index.css"],
  build: { transpile: ["vue-toastification"] },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxthq/studio"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  extends: [
    // "../base-layer",
    "@miracleio/my-nuxt-layer",
  ],
});
