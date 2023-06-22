import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/product/${id}/`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          console.log(data);
        } else {
          console.error('Error fetching product:', response.status);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-20">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-2/5">
          <img
            className="h-64 w-full object-cover rounded-xl"
            src={product.image}
            alt="Imagen del producto"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {product.name}
          </div>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Descripción del Producto</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Precio: ${product.price}</div>
            {/* Agrega botones u opciones relacionadas con el producto aquí */}
            <button className='mt-4 flex w-full justify-center gap-x-2 rounded-md py-2 bg-indigo-600 text-white' >
            <>
                    <ShoppingCartIcon className="h-5 w-5" />
                    add
                  </>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
