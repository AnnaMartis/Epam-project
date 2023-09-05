import "./styles.css";

const Searcher = ({ value, onChange, onSearch, placeholder }) => {

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(event);
    }
  };

  return (
    <form className="searcher" onSubmit={onSearch}>
      <input
        type="text"
        className="searcher-input"
        value={value}
        onKeyDown={handleKeyPress}
        onFocus={onSearch}
        onChange={onChange}
        placeholder={placeholder}
        
      />
      <button className="searcher-button" type="submit">
        SEARCH
      </button>
    </form>
  );
};

export default Searcher;
