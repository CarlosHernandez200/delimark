import { useContext } from "react";
import FormClient from "../components/FormClient";
import ListProductByClient from "../components/ListProductByClient";
import { ProductContext } from "../context/ProductContext";

const CreateProduct = () => {
  const products = useContext(ProductContext);
  const user_id = localStorage.getItem("user_id");

  const filterProductsByClient = (products) => {
    return products.filter((product) => {
      return product.user == user_id;
    });
  };

  const filterdProductsByClient = filterProductsByClient(products);

  return (
    <div className="w-full">
      <div className="container mx-auto flex">
        <div className="flex-1">
          <ListProductByClient products={filterdProductsByClient} />
        </div>
        <div className="flex-1">
          <FormClient userId={user_id} />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
