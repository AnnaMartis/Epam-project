import "./SelectTabs.css";
import cx from "classnames";


const genresList = [
  { id: "all", name: "genre", value: "ALL" },
  { id: "doc", name: "genre", value: "DOCUMENTARY" },
  { id: "com", name: "genre", value: "COMEDY" },
  { id: "horror", name: "genre", value: "HORROR" },
  { id: "crime", name: "genre", value: "CRIME" },
];

export const SelectTabs = ({ genres = genresList, selectedGenre, onSelect }) => {
  return (
    <div className="selector-wrapper">
      <div className="selector">
        {genres?.map((genre) => {
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
              <hr
                className={cx("selector-line", {
                  active: selectedGenre === genre.value,
                })}
              />
            </div>
          );
        })}
      </div>
      <hr className="bottom-line" />
    </div>
  );
};
