<!-- ./components/SiteHeader.vue -->
<template>
  <header class="site-header">
    <NuxtLink to="/">
      <div class="site-logo">
        <span>Nuxt Shop</span>
      </div>
    </NuxtLink>

    <nav class="site-nav">
      <ul class="site-nav__list">
        <li class="site-nav__item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="site-nav__item">
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
