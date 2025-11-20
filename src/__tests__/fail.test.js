describe("Intentional failure tests", () => {
  test("forces a failing condition", () => {
    expect(1 + 1).toBe(3); // always fails
  });

  test("expects an element that will never exist", () => {
    render(<div />);
    expect(screen.getByText("Not going to be here")).toBeInTheDocument();
  });
});
