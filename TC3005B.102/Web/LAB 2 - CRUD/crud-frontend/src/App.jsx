import { useEffect, useState } from "react";
import {
  getCountries,
  createCountry,
  updateCountry,
  deleteCountry,
} from "./services/api";
import CountryList from "./components/CountryList";
import CountryForm from "./components/CountryForm";

function App() {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    capital: "",
    currency: "",
  });
  const [editingId, setEditingId] = useState(null);

  const loadCountries = async () => {
    const data = await getCountries();
    setCountries(data);
  };

  useEffect(() => {
    loadCountries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateCountry(editingId, formData);
      setEditingId(null);
    } else {
      await createCountry(formData);
    }

    setFormData({ name: "", capital: "", currency: "" });
    loadCountries();
  };

  const handleEdit = (country) => {
    setEditingId(country.id);
    setFormData({
      name: country.name,
      capital: country.capital,
      currency: country.currency,
    });
  };

  const handleDelete = async (id) => {
    await deleteCountry(id);
    loadCountries();
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Country CRUD</h1>

      <div className="max-w-xl mx-auto space-y-6">
        <CountryForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />

        <CountryList
          countries={countries}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
