<template>
  <section class="flex justify-center z-10 relative pointer-events-auto ">
    <p v-if="error">Couldn't load posts.</p>
    <p v-else-if="!posts?.length">No posts published yet.</p>
    <ul v-else class="max-w-3xl overflow-y-scroll">
      <li v-for="post in posts" :key="post._id" class="p-3 md:first:mt-6 first:mt-0 mt-6 bg-white-full">
        <Post :post="post"/>
      </li>
    </ul>
  </section>
</template>
<script setup>
const { data: posts, error, status } = await useFetch('/api/posts')
</script>