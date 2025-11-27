const CountryItem = ({ country, onEdit, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-white rounded shadow">
      <span className="flex-1 text-left">
        <strong>{country.name}</strong> — {country.capital} — {country.currency}
      </span>

      <div className="flex items-center gap-2 ml-4">
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded"
          onClick={() => onEdit(country)}
        >
          Edit
        </button>

        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => onDelete(country.id)}
        >
          Delete
        </button>
      </div>

    </li>
  );
};

export default CountryItem;
