import { cars } from "../mock-data/cars"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // find car by id   
  const car = cars.find((car) => car.id === body.id)

  // edit car fields by body
  car.title = body.title
  car.km = body.km
  car.color = body.color  

  return car
})