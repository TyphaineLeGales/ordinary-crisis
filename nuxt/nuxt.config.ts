// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity', '@nuxtjs/tailwindcss', '@nuxt/image',  ['nuxt-mapbox', {
      persistent: false,
    }],],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    sanity: {
      projectId: '',
      dataset: 'production',
      token: '',
    },
  },
   sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET || 'production',
    apiVersion: '2026-10-15',
  },
   image: {
    sanity: {
      projectId: process.env.NUXT_SANITY_PROJECT_ID || '',
      dataset: process.env.NUXT_SANITY_DATASET || 'production'
    }
  },
  mapbox: {
    accessToken:process.env.NUXT_MAPBOX_TOKEN
  },
  
  
})
