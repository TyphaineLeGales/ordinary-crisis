<template> 
    <ul class="md:w-[90px] flex px-3 mt-3 md:mt-1  uppercase text-purple-600 font-medium md:border-l-2 border-purple-400 -translate-y-1">
        <div class="md:h-1/4 flex md:flex-col text-xl justify-between w-full md:mt-3 ">
            <li v-for="route in navLinks" :key="route.path" class="text-right mt-3 flex justify-start">
                <NuxtLink :to="route.path">{{ route.name || route.path }}</NuxtLink>
            </li>
        </div>
    </ul>

</template>
<script setup> 
const router = useRouter()
const allPages = router.getRoutes()
const navLinks = computed(() => allPages.filter(r => r.name !=="index"))

</script>