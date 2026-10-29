<template>
    <div class="py-6">
        <h2 class="text-5xl  uppercase text-violet-500 ">{{ post.title }}</h2>
        <div class="mt-3">
            <h3 class="font-semibold">{{ post.author }}</h3>
            <ul class="flex"><li v-for="tag in post.tags" class="pr-3"><p>{{ tag }}</p></li></ul>
            <p class="font-medium">{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
        </div>
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