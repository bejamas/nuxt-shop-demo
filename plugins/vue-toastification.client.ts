// ./plugins/vue-toastification.client.ts

import Toast, { PluginOptions } from "vue-toastification";

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {};
  nuxtApp.vueApp.use(Toast, options);
});
