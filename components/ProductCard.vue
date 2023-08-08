<!-- ./components/ProductCard.vue -->

<script setup lang="ts">
const { addToCart } = useCart();
defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>
<template>
  <article class="product-card">
    <div class="product-card__content">
      <h2 class="product-card__title">{{ product.title }}</h2>
      <p class="product-card__description">{{ product.description }}</p>
      <div class="product-card__price">
        <span class="product-card__price--discounted">{{
          formatPrice(
            product.price - product.price * (product.discountPercentage / 100)
          )
        }}</span>
      </div>
      <div class="product-card__actions">
        <button
          @click="addToCart(product)"
          class="product-card__actions--add-to-cart"
        >
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
</template>
