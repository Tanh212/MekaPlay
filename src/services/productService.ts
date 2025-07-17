import type { IProduct } from "../interface/product";

// Giả lập API fetch data
export const getProducts = async (): Promise<IProduct[]> => {
  return Promise.resolve([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
  ]);
};
