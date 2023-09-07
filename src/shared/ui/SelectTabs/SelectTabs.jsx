import { palette } from "../../styles/palette";
import "./SelectTabs.css";
import cx from "classnames";

const SelectTabs = ({ genres = [], selectedGenre, onSelect }) => {
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
                style={{
                  backgroundColor: `${
                    selectedGenre === genre.value
                      ? palette.primary.light
                      : palette.primary.neutral
                  }`,
                }}
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

export default SelectTabs;
