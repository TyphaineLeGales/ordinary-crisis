<template>
  <main class="min-h-screen flex flex-col">
    <header class="bg-slate-200">
        <NuxtLink to="/">
          <h1 class="font-semibold text-3xl uppercase text-purple-600 border-b-2 border-purple-600 w-full p-3">
            Ordinary Crisis
          </h1>
        </NuxtLink>
    </header>
     <div class="flex-1 flex flex-col md:flex-row">
         <nav class="md:w-20 md:shrink-0 md:order-last md:flex md:justify-end">
           <Nav />
         </nav>
      <section class="flex-1 p-6">
        <slot />
      </section>

    </div>
  </main>
</template>