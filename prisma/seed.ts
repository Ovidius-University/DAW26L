import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});
const car = { title: "BMW Seria 3", km: 9000, color: "Black" };

await prisma.brand.create({
  data: {
    name: "BMW",
    models: { create: { name: "Seria 3", cars: { create: car } } },
  },
});

await prisma.$disconnect();
