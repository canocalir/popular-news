import "./SearchBar.css";
export default function SearchBar({handleSearch}) {
  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        onChange={(event) => handleSearch(event)}
        type="text"
        className="input-search"
        placeholder="Type to Search.."
      />
    </div>
  );
}
