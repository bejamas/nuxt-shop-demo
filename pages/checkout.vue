<script setup lang="ts">
const { items } = useCart();
const user = ref({});

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem("user") || "{}");
});

definePageMeta({
  middleware: ["checkout"],
});
</script>
<template>
  <header class="site-section">
    <h1>Checkout</h1>
  </header>

  <section class="site-section">
    <article class="cart-summary">
      <ul class="cart-summary__list">
        <li class="cart-summary__list-item">
          <h3 class="cart-summary__item-title">Total items</h3>
          <ul class="item-list">
            <li
              v-for="(item, i) in items.slice(0, 4)"
              :key="item.product.id"
              class="item-list__item"
              :style="`--tw-translate-x: -${i > 0 ? i * 1 : 0}rem`"
            >
              <img
                class="item-list__item-thumbnail"
                :src="item.product.thumbnail"
                :alt="item.product.title"
              />
            </li>
            <li v-if="items.length > 4">
              <span>+{{ items.length - 4 }} more items</span>
            </li>
          </ul>
        </li>
        <li class="cart-summary__list-item">
          <h3 class="cart-summary__item-title">Total price</h3>
          <p class="cart-summary__item-value">
            {{
              formatPrice(
                items.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0,
                ),
              )
            }}
          </p>
        </li>
        <li class="cart-summary__list-item">
          <h3 class="cart-summary__item-title">Shipping Address</h3>
          <p class="cart-summary__item-value">
            No. 1, 1st Street, 1st Avenue, 1st District, 1st City, 1st Country
          </p>
        </li>
        <li class="cart-summary__list-item">
          <h3 class="cart-summary__item-title">Payment method</h3>
          <p class="cart-summary__item-value">Cash on delivery</p>
        </li>
      </ul>
      <div class="action-cont">
        <button class="btn btn--primary">Place order</button>
      </div>
    </article>
  </section>
</template>
