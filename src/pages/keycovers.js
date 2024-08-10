import { useContext, useEffect, useState } from "react";
import axios from "axios";

export const Keycovers = () => {
  const [keycovers, setKeycovers] = useState([]);

  const getAllKeyCovers = async () => {
    try {
      const fetchedCovers = await axios.get("http://localhost:4001/keycovers");
      setKeycovers(fetchedCovers.data.keycovers);
    } catch (error) {
      console.log(`Failed to fetch keycovers ${error}`);
    }
  };

  useEffect(() => {
    getAllKeyCovers();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 p-4 sm:p-6 md:p-8 lg:p-10">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 text-center">
          Carkey Experts offers you a wide range of Car Remote Key Cases &
          Covers.
        </h2>

        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
          Our Remote Key Cases & Covers have the highest quality in the industry
          and the Best Price.
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {keycovers &&
          keycovers.map((keycover) => {
            return (
              <div
                key={keycover.id}
                className="flex flex-col justify-center items-center border gap-3 p-5 mt-5 "
              >
                <img
                  src={keycover.imageURL}
                  alt={keycover.name}
                  className="w-60 h-60 object-cover rounded"
                />
                <h1 className="mt-2 font-bold">{keycover.productName}</h1>
                <p className="max-w-50 text-wrap text-center italic">
                  {keycover.productDescription}
                </p>
                {/* <p className="font-bold text-2xl">ksh.{product.productPrice}</p> */}

                {keycover.stockQuantity > 0 ? (
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
