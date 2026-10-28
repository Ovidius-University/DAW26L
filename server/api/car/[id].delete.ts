import { cars } from "../../mock-data/cars"

export default defineEventHandler(async (event) => {
  const params = getRouterParams(event)
  console.log(params)

  return params
})