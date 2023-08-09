<!-- ./components/CartItem.vue -->

<script setup lang="ts">
defineProps({
  item: {
    type: Object as PropType<CartItem>,
    required: true,
  },
});

const { removeFromCart, addToCart } = useCart();
</script>
<template>
  <article class="cart-item">
    <NuxtLink :to="`/products/${item.product.id}`">
      <img
        :src="item.product.thumbnail"
        :alt="item.product.title"
        class="cart-item__image"
      />
    </NuxtLink>
    <div class="cart-item__content">
      <h2 class="cart-item__title">
        {{ item.product.title }}
      </h2>
      <p class="cart-item__price">
        {{ formatPrice(item.product.price) }}
      </p>
    </div>
    <div class="cart-item__action-cont">
      <button @click="removeFromCart(item.product)" class="btn">-</button>
      <p class="cart-item__quantity">{{ item.quantity }}</p>
      <button @click="addToCart(item.product)" class="btn">+</button>
    </div>
  </article>
</template>
