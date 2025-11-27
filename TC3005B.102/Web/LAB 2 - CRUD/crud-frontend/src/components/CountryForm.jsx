const CountryForm = ({ formData, setFormData, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 p-4 bg-white shadow rounded"
    >
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Country name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Capital"
        value={formData.capital}
        onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
      />

      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Currency"
        value={formData.currency}
        onChange={(e) =>
          setFormData({ ...formData, currency: e.target.value })
        }
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Save Country
      </button>
    </form>
  );
};

export default CountryForm;
