import Basket from "@/components/Basket";
import { ShoppingCartIcon } from "lucide-react";

const BasketPage: React.FC = () => {
  return (
    <div className="w-full p-10 maw-w-7xl mx-auto">
      <div className="flex items-center px-2">
        <ShoppingCartIcon className="w-10 h-10" />
      </div>
      <p className="mt-2 mb-5">
        Review the items in your cart and checkout when ready!
      </p>

      <Basket />
    </div>
  );
};

export default BasketPage;
