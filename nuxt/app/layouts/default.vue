<template>
  <main class="relative isolate h-screen overflow-hidden">
    <div class="fixed inset-0 -z-1">
      <NuxtImg  v-show="!isMapLoaded"
        src="/img/loading-map.webp"
        alt=""
        class="size-full object-cover absolute"
      />
      <h2
        v-show="!isMapLoaded"
        class="text-white-full w-full text-center text-3xl font-semibold top-52 absolute animate-pulse"
      >
        Loading ...
      </h2>
      <ClientOnly>
        <Map />
      </ClientOnly>
    </div>
    <Nav v-show="!isLanding" />
    <section
      class="absolute inset-x-0 md:top-[60px] top-[112px] bottom-0 z-10 overflow-y-auto"
      :class="mapEvents
        ? 'overflow-hidden pointer-events-none'
        : 'overflow-y-auto pointer-events-auto'"
    >
      <slot />
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Ordinary Crisis',
  ogTitle: 'Ordinary Crisis',
  description: 'Ordinary Crisis est une exploration interdisciplinaire de la dimension acoustique des infrastructures fossiles, visant à faire du pétrole une expérience sonore tangible. Né de la rencontre entre Camille El Bacha, musicien, et Jean Daniélou, sociologuece projet cherche à saisir la nature sensible de la crise climatique.',
  ogDescription: 'Ordinary Crisis est une exploration interdisciplinaire de la dimension acoustique des infrastructures fossiles, visant à faire du pétrole une expérience sonore tangible. Né de la rencontre entre Camille El Bacha, musicien, et Jean Daniélou, sociologuece projet cherche à saisir la nature sensible de la crise climatique.',
  ogImage: '/img/landing.webp',
  twitterCard: '/img/landing.webp',
})
const route = useRoute()
const mapEvents = computed(() =>route.path === '/map'
)
const isLanding = computed(() => route.path === '/')
const isMapLoaded = useState('map-loaded', () => false)
</script>