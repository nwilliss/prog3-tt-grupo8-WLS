import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="search-form">
      <form>
        <input className="search-input"  type="text" placeholder="Buscar películas y mas..." />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchForm;