<!-- ./pages/auth/login.vue -->

<script setup lang="ts">
const username = ref("kminchelle");
const password = ref("0lelplR");
const isLoading = ref(false);
const loginError = ref(null as string | null);

const handleLogin = async () => {
  isLoading.value = true;
  const { data, status, error } = await useFetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });
  isLoading.value = false;
  error.value && (loginError.value = error.value.data.message);

  localStorage.setItem("user", JSON.stringify(data.value));
  status.value == "success" && useRouter().push("/");
};
</script>
<template>
  <header class="site-section">
    <h1>Login</h1>
  </header>
  <section class="site-section">
    <form class="form" @submit.prevent="handleLogin">
      <div class="form-control">
        <label for="username">Email</label>
        <input
          v-model="username"
          type="text"
          id="username"
          name="username"
          class="form-input"
          placeholder="Enter your username"
        />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          name="password"
          class="form-input"
          placeholder="Enter your password"
        />
      </div>
      <div v-if="loginError" class="form-error">
        {{ loginError }}
      </div>
      <button :disabled="isLoading" class="btn">Login</button>
    </form>
  </section>
</template>
