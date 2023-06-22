import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCard } from "../hooks/useCard";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const { addToCard } = useCard();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/product/${id}/`
        );
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          console.log(data);
        } else {
          console.error("Error fetching product:", response.status);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-white p-20 shadow-md">
      <div className="md:flex">
        <div className="md:w-2/5 md:flex-shrink-0">
          <img
            className="h-64 w-full rounded-xl object-cover"
            src={product.image}
            alt="Imagen del producto"
          />
        </div>
        <div className="p-8">
          <div className="text-2xl font-semibold uppercase tracking-wide text-indigo-500">
            {product.name}
          </div>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4 flex flex-col items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Precio: ${product.price}
            </div>

            {/* Agrega botones u opciones relacionadas con el producto aquí */}
            <button
              className="mt-4 flex w-full justify-center gap-x-2 rounded-md bg-indigo-600 py-2 text-white"
              onClick={() => addToCard(product)}
            >
              <ShoppingCartIcon className="h-5 w-5" />
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
