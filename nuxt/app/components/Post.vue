<template>
    <div class="py-6">
        <h2 class="text-5xl  uppercase text-violet-500 ">{{ post.title }}</h2>
        <h3 class="font-semibold translate-y-1">{{ post.author }}</h3>
        <p class="font-medium">{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
    </div>
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