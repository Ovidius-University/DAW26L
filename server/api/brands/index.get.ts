export default defineEventHandler(async (event) => {
  const brands = await prisma.brand.findMany()
  return brands
})