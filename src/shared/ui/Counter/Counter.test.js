import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";



describe("Counter Component Functionality", () => {
  test("Renders Initial Value", () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);
    const initialValueElement = screen.getByText(initialValue);
    expect(initialValueElement).toBeInTheDocument();
  });
  test("Decrement Button Functionality", () => {
    const initialValue = 1;
    render(<Counter initialValue={initialValue}/>);
    const decrementElement = screen.getByText('Decrement');
    userEvent.click(decrementElement);
    expect(screen.getByText(initialValue - 1)).toBeInTheDocument();
  });
  test("Increment Button Functionality", () => {
    const initialValue = 1;
    render(<Counter initialValue={initialValue}/>);
    const decrementElement = screen.getByText('Increment');
    userEvent.click(decrementElement);
    expect(screen.getByText(initialValue + 1)).toBeInTheDocument();
  });
});
