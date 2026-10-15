export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const query = `*[
    _type == "post" &&
    defined(slug.current)
  ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    body
  }`

  const client = useSanity().client.withConfig({
    token: config.sanity.token,
  })

  return await client.fetch(query)
})