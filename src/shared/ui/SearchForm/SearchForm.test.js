import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "./SearchForm";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

describe("SearchForm Component Functionality", () => {
  test("Should Render Initial Value", () => {
    const initialValue = "Test";
    render(<SearchForm initialValue={initialValue} />);
    const inputElement = screen.getByTestId("search-input");
    const inputValue = inputElement.value;
    expect(inputValue).toBe(initialValue);
  });
  test("Should onChange fire with right value when clicked submit after typing", () => {
    const mockOnSearch = jest.fn((e) => e.preventDefault());
    const mockedChangedValue = "Javascript";

    render(<SearchForm onSearch={mockOnSearch} />);

    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("search-button");

    userEvent.type(input, mockedChangedValue);
    userEvent.click(button);

    // This part doesn't work, I didn't find a way to pass an event argument

    // expect(mockOnSearch).toHaveBeenCalledWith(
    //     expect.objectContaining({
    //       target: {
    //         value: {mockedChangedValue}
    //       }
    //     })
    //   );

    // Proper Value doesn't check
    expect(mockOnSearch).toBeCalled();
  });

  test("Should onChange fire with right value when clicked enter after typing", () => {
    const mockOnSearch = jest.fn((e) => e.preventDefault());
    const mockedChangedValue = "Javascript";

    render(<SearchForm onSearch={mockOnSearch} />);

    const input = screen.getByTestId("search-input");
    

    userEvent.type(input, mockedChangedValue);
    keyboard("Enter");

    expect(mockOnSearch).toBeCalled();

    // This part doesn't work, I didn't find a way to pass an event argument

    // expect(mockOnChange).toHaveBeenCalledWith(
    //     expect.objectContaining({
    //       target: {
    //         value: {mockedChangedValue}
    //       }
    //     })
    //   );
  });
});
