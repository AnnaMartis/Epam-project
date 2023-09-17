import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter Component Functionality", () => {
  test("Should render initial value", () => {
    const mockedInitialValue = 5;

    render(<Counter initialValue={mockedInitialValue} />);

    const initialValueElement = screen.getByText(mockedInitialValue);

    expect(initialValueElement).toBeInTheDocument();
  });
  test("Should decrement when button clicked", () => {
    const mockedInitialValue = 1;

    render(<Counter initialValue={mockedInitialValue}/>);

    const decrementedElement = screen.getByText('Decrement');
    userEvent.click(decrementedElement);

    expect(screen.getByText(mockedInitialValue - 1)).toBeInTheDocument();
  });
  test("Should increment when button clicked", () => {
    const mockedInitialValue = 1;

    render(<Counter initialValue={mockedInitialValue}/>);

    const incrementedElement = screen.getByText('Increment');
    userEvent.click(incrementedElement);

    expect(screen.getByText(mockedInitialValue + 1)).toBeInTheDocument();
  });
});
