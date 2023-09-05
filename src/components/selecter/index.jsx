import "./styles.css";

const Selector = ({ genres = [], selectedGenre, onSelect }) => {
  return (
    <div className="selector">
      {genres.map((genre) => {
        return (
          <div key={genre.id}>
            <input
              className="selector-radio"
              id={genre.id}
              type="radio"
              value={genre.value}
              name={genre.name}
              checked={selectedGenre === genre.value}
              onChange={onSelect}
            />
            <label className="selector-item" htmlFor={genre.id}>
              {genre.value}
            </label>
            <div
              className={`selector-line ${
                selectedGenre === genre.value && "active"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Selector;
