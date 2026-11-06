<template>
  <div class="size-full justify-center items-center md:items-start xl:items-center flex backdrop-blur-2xl fixed top-0">
    <div class="h-[550px] w-[550px] md:h-[100vh] md:w-[100vh] max-h-[950px] max-w-[950px] relative">
      <NuxtImg src="/img/landing.webp" class="size-full object-cover absolute brightness-50" alt="satellite black and white map of texas"/>
      <h1 class="text-5xl uppercase font-bold absolute text-toxic-violet-full p-3"> Ordinary crisis</h1>
      <p class="absolute bottom-2 text-toxic-violet-full uppercase p-3 text-xs xl:text-lg">
        <!-- A project <NuxtLink to="/about" disabled>about</NuxtLink> -->
        A project about
        <br>
        petroleum and music |
        <br>
        With a  <NuxtLink to="/blog">blog</NuxtLink> where we
        <br>
        store thoughts| with a 
        <br>
        <NuxtLink to="/map">map</NuxtLink> where  we locate 
        <br>
        archives | with  social <br>
        medias  where we share <br>stuff
      </p>
      
    </div>
  </div>
</template>

<style scoped>
a {
  color:#d2b8f4;
}
</style>