// ./middleware/checkout.ts

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/checkout") {
    if (typeof localStorage === "undefined") return navigateTo("/auth/login");
    const user = localStorage ? localStorage.getItem("user") : null;
    if (!user || !JSON.parse(user).token) return navigateTo("/auth/login");
  }
});
