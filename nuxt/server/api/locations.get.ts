export default defineEventHandler(async () => {
  try {
    const config = useRuntimeConfig()
    const client = useSanity().client.withConfig({
      token: config.sanity.token,
    })

    const query = `*[_type == "location"] {
      _id,
      name,
      description,
      slug
    }`

    return await client.fetch(query)
  } catch (error) {
    console.error('Sanity locations query failed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch locations from Sanity',
    })
  }
})