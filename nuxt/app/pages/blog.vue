<template>
  <div class="flex pointer-events-auto p-6 w-full items-center justify-center">
    <p v-if="error">Couldn't load posts.</p>
    <p v-else-if="!posts?.length">No posts published yet.</p>
    <ul v-else class="max-w-3xl overflow-y-scroll">
      <li v-for="post in posts" :key="post._id" class="p-3 first:mt-0 mt-6 bg-white-full">
        <Post :post="post"/>
      </li>
    </ul>
  </div>
</template>
<script setup>
const { data: posts, error, status } = await useFetch('/api/posts')
</script>