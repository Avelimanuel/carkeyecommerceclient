import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/shop-context";
import Hero from "../sections/Hero";


export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [_, setError] = useState("")

  const { addToCart, getCartItemCount } = useContext(ShopContext);

  const getAllProducts = async () => {
    try {
      const fetchedProducts = await axios.get("http://localhost:4001/products");
      setProducts(fetchedProducts.data.products);
    } catch (err) {
      console.log(`Failed to fetch products ${err}`);
      
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <div>
        <Hero />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products &&
          products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col justify-center items-center border gap-3 p-5 mt-5 "
              >
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="w-60 h-60 object-cover rounded"
                />
                <h1 className="mt-2 font-bold">{product.productName}</h1>
                <p className="max-w-50 text-wrap text-center italic">
                  {product.productDescription}
                </p>
                {/* <p className="font-bold text-2xl">ksh.{product.productPrice}</p> */}

                {product.stockQuantity > 0 ? (
                  <h2
                    // type="button"
                    class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    // onClick={() => addToCart(product._id)}
                  >
                    In Stock
                  </h2>
                ) : (
                  <p className="italic font-bold text-red-400">Out Of Stock</p>
                )}
                {/* {product.stockQuantity > 0 ? (
                  <p>
                    Already purchased : {getCartItemCount(product._id)} items
                  </p>
                ) : (
                  <p className="text-center font-serif text-red-700">
                    Purchase Unavailable
                  </p>
                )} */}
              </div>
            );
          })}
      </div>
     
    </div>
  );
};
