<template>
  <main>
    <h1 class="font-extrabold uppercase">Blog</h1>
    <p v-if="error">Couldn't load posts.</p>
    <p v-else-if="!posts?.length">No posts published yet.</p>
    <ul v-else>
      <li v-for="post in posts" :key="post._id">
        <h2>{{ post.title }}</h2>
        <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
        <PortableText :value="post.body" />
        
      </li>
    </ul>
  </main>
</template>
<script setup>
import { PortableText } from '@portabletext/vue';
const { data: posts, error, status } = await useFetch('/api/posts')
</script>