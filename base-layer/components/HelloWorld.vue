<!-- ./components/HelloWorld.vue -->
<script setup lang="ts">
const { myLayer } = useAppConfig();
</script>

<template>
  <header class="site-section">
    <h1>
      {{ myLayer.name }}
    </h1>
  </header>
</template>
