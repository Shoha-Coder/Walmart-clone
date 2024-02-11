import { Product } from "@/typings/productTypings";

export const getCartTotal = (products: Product[]): string => {
    console.log(products)
  const total = products.reduce(
    (acc: number, currentProduct: Product) => acc + currentProduct.price,
    0
  )
  return `${products.length !== 0 ? products[0]?.currency : "$"} ${total.toFixed(2)}`;
};
