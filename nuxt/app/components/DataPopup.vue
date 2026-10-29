<template>
    <Transition name="popup">
        <div class="flex items-center bg-black-full bg-opacity-50 w-[350px] min-h-[300px] pointer-events-auto m-6 backdrop-blur-sm p-3 flex-col rounded-md" v-show="locationActive">
            <h3 class="text-white-full font-medium uppercase text-lg pb-3">{{ locationActive?.name }}</h3>
            <p class="text-white-full"> {{ locationActive?.description }}</p>
        </div>
    </Transition>
</template>
<script setup>
const locationActive = ref(null)
import { PortableText } from '@portabletext/vue';
const { data: locations, error, status } = await useFetch('/api/locations')
console.log(locations)
watchEffect(() => {
  console.log('Status:', status.value)
  console.log('Locations:', locations.value)
  console.log('Error:', error.value)
})
const { $listen, $kill } = useNuxtApp()

const onLocationSet = (location) => {
  const newVal = locations.value.filter(l => l.name === location.name)[0] || location
  locationActive.value = newVal

}

onMounted(() => {
  $listen('location:set', onLocationSet)
  $listen('location:clear', () => locationActive.value = null)
})

onBeforeUnmount(() => {
  $kill('location:set', onLocationSet)
})
</script>
<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 250ms ease, transform 250ms ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.97);
}

.popup-enter-to,
.popup-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>