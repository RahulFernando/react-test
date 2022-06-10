import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // mock
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{ id: 'p1', title: 'First Post' }]
    });
    render(<Async />);

    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).not.toHaveLength(0);
  });
});
