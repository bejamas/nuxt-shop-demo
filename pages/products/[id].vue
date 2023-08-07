<!-- ./pages/products/[id].vue -->
<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

const { data } = await useFetch(`https://dummyjson.com/products/${id}`);
const product = data.value as Product;

console.log({
  product,
  id,
});

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

useSeoMeta({
  title: product.title,
  description: product.description,
  ogTitle: product.title,
  ogDescription: product.description,
  ogImage: product.thumbnail,
  twitterTitle: product.title,
  twitterDescription: product.description,
  twitterImage: product.thumbnail,
});
</script>
<template>
  <header class="product-header site-section">
    <div class="text-content">
      <h1>
        {{ product.title }}
      </h1>
      <p>
        {{ product.description }}
      </p>
      <div class="product-header__price">
        <span class="product-header__price--discounted">
          {{ formatPrice(product.price) }}
        </span>
        <span class="product-header__price--original">
          {{
            formatPrice(product.price * (1 + product.discountPercentage / 100))
          }}
        </span>
        <div class="action-cont">
          <button class="btn btn--primary">Add to cart</button>
          <button class="btn btn--secondary">Buy now</button>
        </div>
      </div>
      <div class="product-header__media-cont">
        <div class="img-cont">
          <img :src="product.thumbnail" :alt="product.title" />
        </div>
      </div>
    </div>
  </header>
  <section class="site-section">
    <ul class="product-info">
      <li class="product-info__item">
        <h2 class="product-info__item-title">Rating</h2>
        <p class="product-info__item-value">{{ product.rating }}</p>
      </li>
      <li class="product-info__item">
        <h2 class="product-info__item-title">Stock</h2>
        <p class="product-info__item-value">{{ product.stock }}</p>
      </li>
      <li class="product-info__item">
        <h2 class="product-info__item-title">Brand</h2>
        <p class="product-info__item-value">{{ product.brand }}</p>
      </li>
      <li class="product-info__item">
        <h2 class="product-info__item-title">Category</h2>
        <p class="product-info__item-value">{{ product.category }}</p>
      </li>
    </ul>
  </section>
</template>
