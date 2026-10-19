<template>
  <main class="h-screen flex flex-col overflow-hidden">
    <header class="relative z-30 shrink-0 bg-black-full">
      <NuxtLink to="/">
        <h1 class="font-semibold text-3xl uppercase text-purple-400 border-b-2 border-purple-400 w-full p-3">
          Ordinary Crisis
        </h1>
      </NuxtLink>
    </header>
    <div class="relative flex-1 min-h-0 flex flex-col md:flex-row">
      <nav class="relative z-30 shrink-0 md:w-20 md:order-last md:flex md:justify-end">
        <Nav />
      </nav>
      <section class="relative isolate flex-1 min-w-0 min-h-0">
        <div class="absolute inset-0 z-0">
          <ClientOnly>
            <Map />
          </ClientOnly>
        </div>
        <div
          class="relative z-10 h-full overflow-y-auto"
          :class="mapEvents ? 'pointer-events-none' : 'pointer-events-auto'"
        >
          <slot />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const mapEvents = computed(() =>
  route.path === '/' || route.path === '/map'
)
</script>