export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  await prisma.car.create({
    data: body
  })

  return {
    type: "success",
    data: body
  }
})