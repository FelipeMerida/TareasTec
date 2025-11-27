import CountryItem from "./CountryItem";

const CountryList = ({ countries, onEdit, onDelete }) => {
  return (
    <ul className="space-y-3">
      {countries.map((country) => (
        <CountryItem
          key={country.id}
          country={country}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default CountryList;
