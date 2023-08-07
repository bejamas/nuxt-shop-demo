<!-- ./app.vue -->
<script setup lang="ts">
const title = ref("Nuxt Shop");
const description = ref("A simple shop built with Nuxt.");
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt Shop` : "Nuxt Shop";
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content: description.value,
    },
    //Open Graph
    {
      key: "og-type",
      property: "og:type",
      content: "website",
    },
    {
      key: "og-url",
      property: "og:url",
      content: `https://thenuxtshop.netlify.app/`,
    },
    {
      key: "og-title",
      property: "og:title",
      content: title.value,
    },
    {
      key: "og-description",
      property: "og:description",
      content: description.value,
    },
    {
      key: "og-image",
      property: "og:image",
      content: `https://thenuxtshop.netlify.app/assets/images/cover.jpg`,
    },
    //Twitter
    {
      key: "twitter-card",
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      key: "twitter-url",
      property: "twitter:url",
      content: `https://thenuxtshop.netlify.app/`,
    },
    {
      key: "twitter-title",
      property: "twitter:title",
      content: title.value,
    },
    {
      key: "twitter-description",
      property: "twitter:description",
      content: description.value,
    },
    {
      key: "twitter-image",
      property: "twitter:image",
      content: `https://thenuxtshop.netlify.app/assets/images/cover.jpg`,
    },
  ],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
