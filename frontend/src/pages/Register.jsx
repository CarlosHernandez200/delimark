import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    cell: '',
    country: '',
    address: '',
    password: ''
  });
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountryList = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/country/');
        if (response.ok) {
          const data = await response.json();
          setCountryList(data);
        } else {
          console.error('Error fetching country list:', response.status);
        }
      } catch (error) {
        console.error('Error fetching country list:', error);
      }
    };

    fetchCountryList();
  }, []);


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleClick = () => {
    if (
      formData.username !== '' &&
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.email !== '' &&
      formData.cell !== '' &&
      formData.country !== '' &&
      formData.address !== '' &&
      formData.password !== ''
    ) {
      const promise = new Promise((resolve) => setTimeout(resolve, 2000));

      toast.promise(promise, {
        loading: 'Loading...',
        success:  (data) => {
          // Mostrar toast de éxito y luego redireccionar
          toast.success('Form submitted successfully');
          console.log('inicio');
          setTimeout(() => {
            navigate('/login', { replace: true });
          }, 7000);
          console.log('fin');
        },
        error: 'Error',
      });
    } else {
      toast.error('You have not completed the fields')
      const errorMessage = 'Please, complete the following fields';
      // Muestra el mensaje de error como desees
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      ...formData,
      country: formData.country
    };

    fetch('http://127.0.0.1:8000/api/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        // Realizar acciones con la respuesta del servidor
        //Redireccionar a otra ruta
        handleClick();
      })
      .catch(error => {
        // Manejar errores
      });

  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cell" className="block mb-2">
            Cell:
          </label>
          <input
            type="text"
            id="cell"
            name="cell"
            value={formData.cell}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block mb-2">
            Country:
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Select a country</option>
            {countryList.map(country => (
              <option key={country.id} value={country.id}>{country.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <Toaster position="bottom-right" />
        <button
          type="submit" onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};
