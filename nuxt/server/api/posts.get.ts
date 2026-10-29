export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const query = `*[
    _type == "post" &&
    defined(slug.current) &&
    !(_id in path("drafts.**"))
    ] | order(publishedAt desc) {
    _id,
    author,
    title,
    image,
    slug,
    publishedAt,
    body
  }`

  const client = useSanity().client.withConfig({
    token: config.sanity.token,
  })

  return await client.fetch(query)
})