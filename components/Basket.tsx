"use client";

import { getCartTotal } from "@/lib/getCartTotal";
import { groupBYSKU } from "@/lib/groupBYSKU";
import { useCartStore } from "@/store";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { Button } from "./ui/button";

const Basket = () => {
  const cart = useCartStore((state) => state.cart);
  const basketTotal = getCartTotal(cart);
  const groupped = groupBYSKU(cart);
  return (
    <div className="max-w-7xl mx-auto">
      <ul className="space-y-5 divide-y-2">
        {Object.keys(groupped).map((sku) => {
          const item = groupped[sku][0];
          const total = getCartTotal(groupped[sku]);
          return (
            <li
              key={sku}
              className="p-5 my-2 flex items-center justify-between"
            >
              {item.images[0] && (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}
              <div className="flex space-x-4 pl-4">
                <div>
                  <p className="line-clamp-2 font-bold">{item.title}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="line-clamp-1 font-light text-sm mt-2"
                  />
                </div>
                <div className="flex flex-col border rounded-md p-5">
                  <AddToCart product={item} />
                  <p className="mt-4 font-bold text-right">{total}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col justify-end p-5">
        <p className="font-bold text-2xl text-right text-walmart mb-5">
          Total: {basketTotal}
        </p>
        {cart.length !== 0 ? (
          <Button className="mt-5 h-20 bg-walmart hover:bg-walmart/50">
            Checkout
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Basket;
