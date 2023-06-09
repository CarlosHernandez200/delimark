const ListProductByClient = ({ products, userId, onDeleteProduct }) => {
  const filterProductsByClient = (products) => {
    return products.filter((product) => {
      return product.user == userId;
    });
  };

  const filterdProductsByClient = filterProductsByClient(products);
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {filterdProductsByClient.map((product) => (
            <li key={product.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className="ml-4">{product.id}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.status}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="flex text-gray-500">Qty {product.quantity}</p>

                  <div className="flex gap-x-4">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => onDeleteProduct(product.id)}
                    >
                      Remove
                    </button>
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => onDeleteProduct(product.id)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListProductByClient;
