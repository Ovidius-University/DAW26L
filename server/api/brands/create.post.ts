export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  await prisma.brand.create({
    data: body
  })

  return true
})