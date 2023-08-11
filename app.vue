<!-- ./app.vue -->
<script setup lang="ts">
const title = ref("Nuxt Shop");
const description = ref("A simple shop built with Nuxt.");
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt Shop` : "Nuxt Shop";
  },
  meta: [
    //Open Graph
    {
      key: "og-type",
      property: "og:type",
      content: "website",
    },
    {
      key: "og-url",
      property: "og:url",
      content: `https://anuxtshop.netlify.app/`,
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
      content: `https://anuxtshop.netlify.app/`,
    },
  ],
});

useSeoMeta({
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `https://anuxtshop.netlify.app/assets/images/cover.jpg`,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `https://anuxtshop.netlify.app/assets/images/cover.jpg`,
});
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
