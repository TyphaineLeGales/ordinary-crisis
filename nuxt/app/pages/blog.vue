<template>
  <section class="flex justify-center z-10 relative">
    <p v-if="error">Couldn't load posts.</p>
    <p v-else-if="!posts?.length">No posts published yet.</p>
    <ul v-else class="max-w-3xl bg-slate-200 overflow-y-scroll">
      <li v-for="post in posts" :key="post._id" class="p-3">
        <h2 class="text-2xl font-bold">{{ post.title }}</h2>
        <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
        <SanityImage
          v-if="post.image?.asset?._ref"
          :asset-id="post.image.asset._ref"
          :alt="post.title"
          w="800"
          h="450"
          auto="format"
          class="w-full aspect-video object-cover"
          loading="lazy"
        />
        <PortableText :value="post.body" />
        
      </li>
    </ul>
  </section>
</template>
<script setup>
import { PortableText } from '@portabletext/vue';
const { data: posts, error, status } = await useFetch('/api/posts')
console.log(posts)
</script>