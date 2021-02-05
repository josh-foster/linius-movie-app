import React from "react";
import { render } from "@testing-library/react";
import MovieCard from "./MovieCard";

describe("MovieCard tests", () => {
  it("should render", () => {
    expect(render(<MovieCard />)).toBeTruthy();
  });
});
