// ./plugins/vue-toastification.client.ts

import Toast from "vue-toastification";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {});
});
