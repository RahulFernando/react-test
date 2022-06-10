import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello world", () => {
    // arrange
    render(<Greeting />);

    // act
    // ...nothing

    // assert
    const text = screen.getByText("Hello World", { exact: true });
    expect(text).toBeInTheDocument();
  });

  test("renders Its good to see you if button not clicked", () => {
    // arrange
    render(<Greeting />);

    // assert
    const text = screen.getByText("It's good to see you!");
    expect(text).toBeInTheDocument();
  });

  test("renders Changed if button clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const button = screen.getByRole('button');
    userEvent.click(button);

    // assert
    const text = screen.getByText("Changed!");
    expect(text).toBeInTheDocument();
  });

  test("does not renders Its good to see you if button clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const button = screen.getByRole('button');
    userEvent.click(button);

    // assert
    const text = screen.queryByText("It's good to see you!");
    expect(text).not.toBeInTheDocument();
  });
});
