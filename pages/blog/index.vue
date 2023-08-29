<!-- ./pages/blog/index.vue -->
<script setup>
// set meta for page
useHead({
  title: "All articles",
  meta: [
    { name: "description", content: "Here's a list of all my great articles" },
  ],
});
</script>
<template>
  <main>
    <header class="site-section">
      <h1 class="text-5xl font-extrabold">All articles</h1>
      <p class="font-medium text-lg">Here's a list of all my great articles</p>
    </header>
    <section class="site-section">
      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fields in the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', '_path', 'readingTime'],
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul>
            <li v-for="article in list" :key="article._path">
              <header>
                <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                <p>{{ article.description }}</p>
                <p class="text-sm text-gray-500">
                  {{ article.readingTime?.text }}
                </p>
                <NuxtLink :to="article._path">
                  <button class="btn mt-2">Read more &rarr;</button>
                </NuxtLink>
              </header>
            </li>
          </ul>
        </template>

        <!-- slot to display message when no content is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>
