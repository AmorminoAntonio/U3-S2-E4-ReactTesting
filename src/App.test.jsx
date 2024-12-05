import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./App";
import Welcome from "./components/Welcome";
import CommentArea from "./components/CommentArea";
import SingleBook from "./components/SingleBook";

describe("App", () => {
  // it("esegue il rendering del componente App", () => {
  //   render(<App />);

  //   screen.debug(); // stampa il jsx nel componente App sulla riga di comando
  // });

  it("esegue il rend di welcome", () => {
    render(<Welcome />);

    screen.debug();
  });

  it("esegue il rend di CommentArea", () => {
    render(<CommentArea />);

    screen.debug();
  });

  
  
});
