import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "./SearchForm";

describe("SearchForm component functionality", () => {
  test("Should render initial value", () => {
    const mockedInitialValue = "Test";

    render(<SearchForm initialValue={mockedInitialValue} />);

    const inputElement = screen.getByTestId("search-input");
    const inputValue = inputElement.value;

    expect(inputValue).toBe(mockedInitialValue);
  });
  test("Should fire onChange with right value when clicked submit after typing", () => {
    const mockOnSearch = jest.fn();
    const mockedChangedValue = "Javascript";

    render(<SearchForm onSearch={mockOnSearch} />);

    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("search-button");

    userEvent.type(input, mockedChangedValue);
    userEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith(mockedChangedValue);
  });

  test("Should fire onChange with right value when clicked enter after typing", () => {
    const mockOnSearch = jest.fn();
    const mockedChangedValue = "Javascript";

    render(<SearchForm onSearch={mockOnSearch} />);

    const input = screen.getByTestId("search-input");

    userEvent.type(input, mockedChangedValue);
    userEvent.type(input, '{enter}');

    expect(mockOnSearch).toHaveBeenCalledWith(mockedChangedValue);
  });
});
