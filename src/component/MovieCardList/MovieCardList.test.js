import React from "react";
import { render } from "@testing-library/react";
import MovieCardList from "./MovieCardList";

describe("MovieCardList tests", () => {
  it("should render", () => {
    expect(render(<MovieCardList />)).toBeTruthy();
  });
});
