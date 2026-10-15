<template> 
    <ul class="flex flex-col">
        <li v-for="route in allPages" :key="route.path" class="text-right">
            <NuxtLink :to="route.path">{{ route.name || route.path }}</NuxtLink>
        </li>
    </ul>

</template>
<script setup> 
const router = useRouter()
const allPages = router.getRoutes()

</script>