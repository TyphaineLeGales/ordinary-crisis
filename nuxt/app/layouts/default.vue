<template>
  <main class="relative isolate h-screen flex flex-col overflow-hidden">
    <div class="fixed inset-0 -z-1">
      <img
        v-show="!isMapLoaded"
        src="/img/loading-map.webp"
        alt=""
        class="size-full object-cover absolute"
      />
      <h2 v-show="!isMapLoaded" class="text-white-full w-full text-center text-3xl font-semibold top-52 absolute animate-pulse">Loading ...</h2>
      <ClientOnly>
        <Map />
      </ClientOnly>
    </div>
    <header class="relative z-15 shrink-0" v-show="!isLanding">
      <NuxtLink to="/">
        <h1 class="font-semibold text-3xl uppercase text-violet-500 border-b-2 border-violet-500 md:border-0  w-full p-3 backdrop-blur-sm">
          Ordinary Crisis
        </h1>
      </NuxtLink>
    </header>

    <div class="flex-1 min-h-0 flex flex-col md:flex-row">
      <nav class="relative shrink-0 md:w-20 md:order-last md:flex md:justify-end backdrop-blur-sm bg-opacity-75" v-show="!isLanding">
        <Nav />
      </nav>
      <section class="relative flex-1 min-w-0 min-h-0" :class="mapEvents
            ? 'overflow-hidden pointer-events-none'
            : 'overflow-y-auto pointer-events-auto'">
          <slot />
      </section>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()

const mapEvents = computed(() =>route.path === '/map'
)
const isLanding = computed(() => route.path === '/')
const isMapLoaded = useState('map-loaded', () => false)
</script>