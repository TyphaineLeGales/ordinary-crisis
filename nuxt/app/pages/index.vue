<template>
  <main>
    <h1>Ordinary Crisis</h1>
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
const postsQuery = groq`*[
  _type == "post" &&
  defined(slug.current)
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  body
}`

const { data: posts, error } = await useSanityQuery(postsQuery)
console.log("data", posts)
</script>