<template>
        <h2 class="text-5xl font-light uppercase text-purple-600 ">{{ post.title }}</h2>
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
        
</template>
<script setup>
import { PortableText } from '@portabletext/vue';
const props = defineProps(['post'])
</script>