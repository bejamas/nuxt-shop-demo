<!-- ./pages/cart.vue -->

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
  <section class="site-section cart__total">
    <p v-if="!(items.length === 0)" class="cart__total-items">
      Total items:
      {{ items.reduce((acc, item) => acc + item.quantity, 0) }}
    </p>
    <p class="cart__total-price">
      Total price:
      {{
        formatPrice(
          items.reduce(
            (acc, item) => acc + item.product.price * item.quantity,
            0
          )
        )
      }}
    </p>
    <div class="action-cont">
      <NuxtLink v-if="!(items.length === 0)" to="/checkout">
        <button class="btn btn--primary">Proceed to checkout</button>
      </NuxtLink>
    </div>
  </section>
</template>
