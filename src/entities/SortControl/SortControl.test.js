import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SortControl } from "./SortControl";
import { moviesSortOptions } from "./sortControlMock";

describe("SortControl Component Functionality", () => {
  test("Should selectedOption be selected", () => {
    render(
      <SortControl
        options={moviesSortOptions}
        selectedOption={moviesSortOptions[0]}
        onSelect={() => {}}
      />
    );
    const element = screen.getByText(moviesSortOptions[0].label);
    expect(element).toBeInTheDocument();
  });
  test("Should onSelect be be fired whenever an option is selected", () => {
    const mockOnSelect = jest.fn();
    const { getByTestId } = render(
      <SortControl
        options={moviesSortOptions}
        selectedOption={moviesSortOptions[0]}
        onSelect={() => {}}
      />
    );

    const select = getByTestId('sort-select');
    fireEvent.change(select, { target: { value: moviesSortOptions[2] } });
    expect(mockOnSelect).toHaveBeenCalled();
  });
});