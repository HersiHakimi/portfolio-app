export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="input-group">
      <span className="input-group-text bg-white">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        id="search-input"
        name="search"
        aria-label="Search projects"
        className="form-control"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Event Handling
      />
    </div>
  );
}
