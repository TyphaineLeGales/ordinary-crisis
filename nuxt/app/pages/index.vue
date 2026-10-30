<template>
  <div class="size-full justify-center items-center flex backdrop-blur-2xl fixed top-0">
    <div class="h-[550px] w-[550px] relative">
      <NuxtImg src="/img/landing.webp" class="size-full object-cover absolute brightness-50" alt="satellite black and white map of texas"/>
      <h1 class="text-5xl uppercase font-bold absolute text-violet-500 p-3"> Ordinary crisis</h1>
      <p class="absolute bottom-2 text-violet-500 uppercase p-3">
        A project <NuxtLink to="/about">about</NuxtLink>
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

<style scoped>
a {
  @apply text-purple-200 underline
}
</style>