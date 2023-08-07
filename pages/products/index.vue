<!-- ./pages/products/index.vue -->
<script setup lang="ts">
interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
const { products }: ProductResponse = await $fetch(
  "https://dummyjson.com/products/"
);

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
</script>
<template>
  <header class="site-section">
    <h1>Products</h1>
    <p>
      Browse our products and find the best deals. It's not a promise. It's a
      guarantee!
    </p>
  </header>
  <section class="site-seciton">
    <ul class="product-list">
      <li
        v-for="product in products"
        :key="product.id"
        class="product-list__item"
      >
        <article class="product-card">
          <div class="product-card__content">
            <h2 class="product-card__title">{{ product.title }}</h2>
            <p class="product-card__description">{{ product.description }}</p>
            <div class="product-card__price">
              <span class="product-card__price--discounted">{{
                formatPrice(
                  product.price -
                    product.price * (product.discountPercentage / 100)
                )
              }}</span>
            </div>
            <div class="product-card__actions">
              <button class="product-card__actions--add-to-cart">
                Add to cart
              </button>
              <NuxtLink :to="`/products/${product.id}`">
                <button class="product-card__actions--view-details">
                  View details
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="product-card__image">
            <img :src="product.thumbnail" :alt="product.title" />
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>
