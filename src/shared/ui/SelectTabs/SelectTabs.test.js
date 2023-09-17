import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SelectTabs } from "./SelectTabs";
import { genresList } from "./selectTabsMock";
import userEvent from "@testing-library/user-event";

describe("SelectTab Component Functionality", () => {
  test("Should Render All Genres", () => {
    const mockedOnChange = jest.fn();

    render(
      <SelectTabs
        genres={genresList}
        onSelect={mockedOnChange}
        selectedGenre={genresList[0]}
      />
    );

    genresList.forEach((genre) => {
      const genreElement = screen.getByText(genre.value);
      expect(genreElement).toBeInTheDocument();
    });
  });
  test("Should highlight a component with selected genre passed in props", () => {
    const mockedOnChange = jest.fn();
    const mockedSelectedTab = genresList[0];

    render(
      <SelectTabs
        genres={genresList}
        onSelect={mockedOnChange}
        selectedGenre={mockedSelectedTab}
      />
    );

    genresList.forEach((genre) => {
      const activeElement = screen.getByText(genre.value);
      if (genre.value === mockedSelectedTab.value) {
        expect(activeElement).toBeChecked;
      } else {
        expect(activeElement).not.toBeChecked;
      }
      const genreElement = screen.getByText(genre.value);

      expect(genreElement).toBeInTheDocument();
    });
  });
  test("click event on a genre button component should call onChange callback and passes correct genre in arguments", () => {
    const mockedOnChange = jest.fn();
    const mockedSelectedTab = genresList[0];
    const mockedClickedTab = genresList[1];

    render(
        <SelectTabs
          genres={genresList}
          onSelect={mockedOnChange}
          selectedGenre={mockedSelectedTab}
        />
      );

    const clickedElement = screen.getByText(mockedClickedTab.value);
    userEvent.click(clickedElement);

    expect(mockedOnChange).toBeCalled();
  });
});
