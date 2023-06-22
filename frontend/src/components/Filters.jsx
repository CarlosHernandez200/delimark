import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Filters = ({ changeFilters }) => {
  const handlehangeCategory = (event) => {
    console.log(event.target.value)
    changeFilters({      
      // hay que cambiarlo por categoria
      category: event.target.value,
    });
  };

  return (
    <div>
      <div className="flex gap-x-2">
        <EllipsisVerticalIcon className="h-5 w-5 text-red-600" />
        <div>
          <label htmlFor="category" className="text-sm">
            Categira
          </label>
          <select
            name="category"
            className="ml-2 text-sm"
            onChange={handlehangeCategory}
            id="category"
          >
            <option value="All">Todos</option>
            <option value="1">pizza</option>
            <option value="2">Hamburguesa</option>
            <option value="3">Sushi</option>
            <option value="4">Salchipapa</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
