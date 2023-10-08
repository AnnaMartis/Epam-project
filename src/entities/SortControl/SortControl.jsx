import "./SortControl.css";

export const SortControl = ({ options, selectedOption, onSelect }) => {
  return (
    <div className="sort-control">
      <label className="options-label" htmlFor="options">SORT BY</label>
      <select data-testid="select" name="options" id="options" value={selectedOption.value} onChange={onSelect}>
        {options.map((option, id) => {
          return (
            <option className="options-option" key={id} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
