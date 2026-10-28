export interface Car {
  id: number;
  title: string;
  km: number;
  color: string;
}

export const cars: Car[] = [
  { id: 1, title: "BMW Seria 3", km: 9000, color: "Black" },
  { id: 2, title: "Audi A4", km: 10000, color: "Red" },
];

let nextId = 3;
export const newId = () => nextId++;
