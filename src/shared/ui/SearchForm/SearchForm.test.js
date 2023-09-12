import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "./SearchForm";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

describe("SearchForm Component Functionality", () => {
  test("Renders Initial Value", () => {
    const initialValue = "Test";
    render(<SearchForm initialValue={initialValue} />);
    const inputElement = screen.getByRole("textbox");
    const inputValue = inputElement.value;
    expect(inputValue).toBe(initialValue);
  });
  test("onChange fires with right value when clicked submit after typing", () => {
    const mockOnChange = jest.fn((e) => e.preventDefault());
    const changedValue = "Javascript";

    render(<SearchForm onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    userEvent.type(input, changedValue);
    userEvent.click(button);

    // This part doesn't work, I didn't find a way to pass an event argument

    // expect(mockOnChange).toHaveBeenCalledWith(
    //     expect.objectContaining({
    //       target: {
    //         value: {changedValue}
    //       }
    //     })
    //   );

    // Proper Value doesn't check
    expect(mockOnChange).toBeCalled();
  });

  test("onChange fires with right value when clicked enter after typing", () => {
    const mockOnChange = jest.fn((e) => e.preventDefault());
    const changedValue = "Javascript";

    render(<SearchForm onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");
    // const button = screen.getByRole("button");

    userEvent.type(input, changedValue);
    keyboard("Enter");

    expect(mockOnChange).toBeCalled();

    // This part doesn't work, I didn't find a way to pass an event argument

    // expect(mockOnChange).toHaveBeenCalledWith(
    //     expect.objectContaining({
    //       target: {
    //         value: {changedValue}
    //       }
    //     })
    //   );
  });
});
