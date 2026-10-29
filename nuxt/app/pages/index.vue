<template>
  <div class="size-full justify-center items-center flex">
    <div class="bg-violet-500 h-[550px] w-[550px] relative">
      <img
      src="/img/loading-map.webp"
      alt=""
      class="size-full object-cover absolute"
      />
      <h1 class="text-5xl uppercase font-bold absolute text-violet-500"> Ordinary crisis</h1>
      <p class="absolute bottom-2 text-violet-500 uppercase">
        A project <NuxtLink to="/about">what</NuxtLink>
        <br>
        petroleum and music |
        <br>
        With a  <NuxtLink to="/blog">blog</NuxtLink> where we
        <br>
        store thoughts| with a 
        <NuxtLink to="/map">map</NuxtLink> where we locate
        <br>
        archives | with social media 
        <br>
        where we share stuff
      </p>
      
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'landing',
})</script>
<style scoped>
a {
  @apply text-purple-200 underline
}
</style>