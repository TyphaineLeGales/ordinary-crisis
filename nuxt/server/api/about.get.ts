export default defineEventHandler(async () => {
  try {
    const config = useRuntimeConfig()
    const client = useSanity().client.withConfig({
      token: config.sanity.token,
    })

    const query = `*[_type == "about"] {
      body,
      partners,
    }`

    return await client.fetch(query)
  } catch (error) {
    console.error('Sanity about query failed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch about from Sanity',
    })
  }
})