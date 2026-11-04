export default defineEventHandler(async (event) => {

  console.log(event)
  
  const cars = await prisma.car.findMany()

  return cars
})