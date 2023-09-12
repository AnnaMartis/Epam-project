import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SelectTabs } from "./SelectTabs";
import { genresList } from "./selectTabsMock";
import userEvent from "@testing-library/user-event";

describe("SelectTab Component Functionality", () => {
  test("Renders All Genres", () => {
    const onChange = jest.fn();
    render(
      <SelectTabs
        genres={genresList}
        onSelect={onChange}
        selectedGenre={genresList[0]}
      />
    );
    genresList.forEach((genre) => {
      const genreElement = screen.getByText(genre.value);
      expect(genreElement).toBeInTheDocument();
    });
  });
  test("component highlights a selected genre passed in props", () => {
    const onChange = jest.fn();
    const selectedTab = genresList[0];
    render(
      <SelectTabs
        genres={genresList}
        onSelect={onChange}
        selectedGenre={selectedTab}
      />
    );
    genresList.forEach((genre) => {
      const activeElement = screen.getByText(genre.value);
      if (genre.value === selectedTab.value) {
        expect(activeElement).toBeChecked;
      } else {
        expect(activeElement).not.toBeChecked;
      }
      const genreElement = screen.getByText(genre.value);
      expect(genreElement).toBeInTheDocument();
    });
  });
  test("click event on a genre button component calls onChange callback and passes correct genre in arguments", () => {
    const onChange = jest.fn();
    const selectedTab = genresList[0];
    const willBeClickedTab = genresList[1];
    render(
        <SelectTabs
          genres={genresList}
          onSelect={onChange}
          selectedGenre={selectedTab}
        />
      );

    const willBeClickedElement = screen.getByText(willBeClickedTab.value);

    userEvent.click(willBeClickedElement);

    expect(onChange).toBeCalled();
  });
});
