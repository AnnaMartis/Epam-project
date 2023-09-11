import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "./SearchForm";

describe("SearchForm Component Functionality", () => {
  test("Renders Initial Value", () => {
    const initialValue = "Test";
    render(<SearchForm initialValue={initialValue} />);
    const inputElement = screen.getByRole("textbox");
    const inputValue = inputElement.value;
    expect(inputValue).toBe(initialValue);
  });
//   test("onChange fires when clicked submit after typing", () => {
//     const mockOnChange = jest.fn();
//     const changedValue = "Javascript";
  
//     render(<SearchForm onChange={mockOnChange} />);
    
//     userEvent.type(screen.getByRole("textbox"), changedValue);
//     userEvent.click(screen.getByRole("button", { name: "Submit" })); 
   
//     expect(mockOnChange).toHaveBeenCalledWith(changedValue);
//   });
});
