import React from 'react';

export const Contact = () => {
  return (
    <section className="bg-white-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full px-4 mb-6">
            <textarea
              placeholder="Mensaje"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              rows="5"
            ></textarea>
          </div>
          <div className="w-full px-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
};
