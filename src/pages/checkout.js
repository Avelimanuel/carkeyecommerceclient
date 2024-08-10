import { ShopContext } from "../context/shop-context";
import { GetCartItems } from "../hooks/GetCartItems";
import { useContext } from "react";
import { Keycovers } from "./keycovers";
export const Checkout = () => {
  const { products } = GetCartItems();
  const { getCartItemCount } = useContext(ShopContext);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Cart Items</h1>

      {products.map((product) => {
        if (getCartItemCount(product._id) !== 0) {
          return (
            <div>
              <Keycovers product={product} />
            </div>
          );
        }
      })}
    </div>
  );
};
