<template> 
    <ul>
        <li v-for="route in allPages" :key="route.path">
        <NuxtLink :to="route.path">{{ route.name || route.path }}</NuxtLink>
        </li>
    </ul>

</template>
<script setup> 
const router = useRouter()
const allPages = router.getRoutes()

</script>