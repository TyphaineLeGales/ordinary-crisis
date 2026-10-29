<template> 
    <header class="flex md:flex-row flex-col w-screen bg-black-full bg-opacity-40 backdrop-blur-md text-violet-500 md:justify-between">
      <NuxtLink to="/">
        <h1 class="font-semibold text-3xl uppercase border-b-2 border-violet-500 md:border-0  w-full p-3">
          Ordinary Crisis
        </h1>
      </NuxtLink>
      <ul class="flex px-3 uppercase font-medium pb-3 md:pb-0">
          <div class="flex text-xl justify-between w-full mt-3 items-center">
              <li v-for="route in navLinks" :key="route.path" class="text-right flex justify-start md:pr-3">
                  <NuxtLink :to="route.path" exact-active-class="text-white-full">{{ route.name || route.path }}</NuxtLink>
              </li>
          </div>
      </ul>
    </header>

</template>
<script setup> 
const router = useRouter()
const allPages = router.getRoutes()
const navLinks = computed(() => allPages.filter(r => r.name !=="index"))

</script>