// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/products/**": { ssr: true },
    "/checkout/**": { ssr: false },
  },
  css: ["~/assets/css/main.css", "vue-toastification/dist/index.css"],
  build: { transpile: ["vue-toastification"] },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
});
