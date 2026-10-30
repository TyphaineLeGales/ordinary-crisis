<template>
  <div class="w-full min-h-full flex justify-center items-start">
    <div
      class="w-full max-w-7xl md:w-2/3 bg-white-full md:m-6
             p-6 flex flex-col md:flex-row"
    >
      <div class="md:w-2/3 w-full">
        <PortableText :value="about[0].body" />
      </div>

      <div class="md:w-1/3 w-full md:ml-12 flex flex-col mt-6 md:mt-0">
        <h2 class="uppercase text-lg">CORE Team</h2>
        <p>Jean Daniélou</p>
        <p>Camille El Bacha</p>

        <h2 class="uppercase text-lg mt-6">PARTNERS</h2>
        <ul>
          <li v-for="partner in about[0].partners" :key="partner">
            <p>{{ partner }}</p>
          </li>
        </ul>

        <h2 class="uppercase text-lg mt-6">SITE WEB</h2>
        <p>Typhaine Le Galès</p>
        <div class="mt-auto pt-12 flex items-end justify-end w-full">
          <NuxtImg class="mt-auto pt-12 w-32" src="/img/logo-albertine.png"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PortableText } from '@portabletext/vue';
const { data: about, error, status } = await useFetch('/api/about')
</script>
<style scoped>
p {
    @apply text-violet-500
}
</style>