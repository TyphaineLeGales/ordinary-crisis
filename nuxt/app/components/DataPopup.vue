<template>
    <Transition name="popup">
        <div class="flex justify-center bg-black-full bg-opacity-50 w-[350px] min-h-[300px] pointer-events-auto m-6 backdrop-blur-sm p-3" v-show="locationActive">
            <h3 class="text-white-full uppercase text-lg">{{ locationActive?.name }}</h3>
            <!-- <p> {{ description }}</p> -->
        </div>
    </Transition>
</template>
<script setup>
const locationActive = ref(null)
const { $listen, $kill } = useNuxtApp()

const onLocationSet = (location) => {
  locationActive.value = location
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