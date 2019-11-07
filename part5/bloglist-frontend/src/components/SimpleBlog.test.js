import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import SimpleBlog from "./SimpleBlog";

test("renders content", () => {
  const blog = {
    title: "Component testing is done with react-testing-library",
    author: "Bob Jones",
    likes: 50
  };

  const component = render(<SimpleBlog blog={blog} />);

  const title = component.container.querySelector("#title");
  const author = component.container.querySelector("#author");
  const likes = component.container.querySelector("#likes");

  expect(title).toHaveTextContent(
    "Component testing is done with react-testing-library"
  );

  expect(author).toHaveTextContent("Bob Jones");

  expect(likes).toHaveTextContent("50");
});

test("clicking the button calls event handler twice", () => {
  const blog = {
    title: "Component testing is done with react-testing-library",
    author: "Bob Jones",
    likes: 50
  };

  const mockHandler = jest.fn();

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  );

  const button = getByText("like");
  fireEvent.click(button);
  fireEvent.click(button);

  expect(mockHandler.mock.calls.length).toBe(2);
});
