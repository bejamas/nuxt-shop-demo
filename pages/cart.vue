<script setup lang="ts">
const { items } = useCart();

useSeoMeta({
  title: "Cart",
});
</script>
<template>
  <header class="site-section">
    <h1>Cart</h1>
  </header>
  <section class="site-section">
    <ul class="cart">
      <li v-for="item in items" :key="item.product.id" class="cart__item">
        <CartItem :item="item" />
      </li>
    </ul>
  </section>
</template>
