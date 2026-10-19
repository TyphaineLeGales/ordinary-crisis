<template>
  <main class="min-h-screen flex flex-col">
    <header class="bg-black-full z-10">
        <NuxtLink to="/">
          <h1 class="font-semibold text-3xl uppercase text-purple-400 border-b-2 border-purple-400 w-full p-3">
            Ordinary Crisis
          </h1>
        </NuxtLink>
    </header>
     <div class="flex-1 flex flex-col md:flex-row">
         <nav class="md:w-20 md:shrink-0 md:order-last md:flex md:justify-end z-10">
           <Nav />
         </nav>
      <section class="flex-1">
        <ClientOnly>
          <Texasmap />
        </ClientOnly>
        <slot />
      </section>

    </div>
  </main>
</template>