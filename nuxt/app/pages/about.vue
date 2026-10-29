<template>
    <div class="flex justify-center items-center w-full md:flex-row flex-col">
        <div class="md:w-2/3 w-full max-w-7xl flex min-h-[calc(100vh-112px)] bg-white-full m-6 md:flex-row flex-col p-6">
            <div class="md:w-2/3 w-full">
                <PortableText :value="about[0].body" />
            </div>
            <div class="md:w-1/3 w-full">
                <h2 class="uppercase text-lg">CORE Team</h2>
                <p class="text-violet-500">Jean Daniélou</p>
                <p class="text-violet-500">Camille El Bacha</p>
                <h2 class="uppercase text-lg mt-6">PARTNERS</h2>
                <ul>
                    <li v-for="partner in about[0].partners">
                        <p class="text-violet-500">{{partner}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { PortableText } from '@portabletext/vue';
const { data: about, error, status } = await useFetch('/api/about')
</script>