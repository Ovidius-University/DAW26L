import { cars } from "../mock-data/cars"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  cars.push(body)
  console.log(cars)
  return true
})