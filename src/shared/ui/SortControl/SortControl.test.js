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
        onSelectCB={() => {}}
      />
    );
    const element = screen.getByText(moviesSortOptions[0].label);
    expect(element).toBeInTheDocument();
  });
});
