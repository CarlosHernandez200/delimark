const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Error 404</h1>
      <p className="text-lg text-gray-600">
        La página que estás buscando no se encontró.
      </p>
    </div>
  );
}

export default NotFound;