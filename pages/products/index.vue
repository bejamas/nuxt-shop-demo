<!-- ./pages/products/index.vue -->
<script setup lang="ts">
interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
const { products }: ProductResponse = await $fetch("/api/getProducts");

useSeoMeta({
  title: "Products",
});
</script>
<template>
  <header class="site-section">
    <h1>Products</h1>
    <p>
      Browse our products and find the best deals. It's not a promise. It's a
      guarantee!
    </p>
  </header>
  <section class="site-section">
    <ul class="product-list">
      <li
        v-for="product in products"
        :key="product.id"
        class="product-list__item"
      >
        <ProductCard :product="product" />
      </li>
    </ul>
  </section>
</template>
