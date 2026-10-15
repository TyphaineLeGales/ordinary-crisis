export default defineNuxtPlugin( () => {
  const sanity = useSanity()
  const config = useRuntimeConfig()

  sanity.setToken(config.sanity.token)
})