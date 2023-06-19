import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Filters = ({ changeFilters }) => {
  const handlehangeCategory = (event) => {
    changeFilters({
      // hay que cambiarlo por categoria
      status: event.target.value,
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
            <option value="Alive">Alive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
