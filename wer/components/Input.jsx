function SearchBar({ value, onChange, placeholder, type="text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="shelf-input"
    />
  );
}

export default  SearchBar