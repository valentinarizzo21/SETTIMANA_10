//Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import fantasyBooks from "../data/fantasy.json";
import BookList from "../components/BookList";

describe("Testing BookList component", () => {
  it("renders the correct number of Bootstrap cards", async () => {
    render(<BookList books={fantasyBooks} />);
    const cards = await screen.findAllByTestId("article");
    expect(cards).toHaveLength(fantasyBooks.length);
  });
});
