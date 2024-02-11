"use client";
import { useCartStore } from "@/store";
import { Product } from "@/typings/productTypings";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";

const AddToCart: React.FC<{ product: Product }> = ({ product }) => {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);
  const howManyInCart = cart.filter(
    (item) => item?.meta.sku === product?.meta.sku
  ).length;
  const handleAdd = () => {
    addToCart(product);
  };
  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }
  return (
    <Button onClick={handleAdd} className="bg-walmart hover:bg-walmart/50">
      Add to Cart
    </Button>
  );
};

export default AddToCart;
