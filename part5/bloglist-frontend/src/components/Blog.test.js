import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import Blog from "./Blog";

test("renders content", () => {
  const blog = {
    title: "Component testing is done with react-testing-library",
    author: "Chris Stuart",
    url: "http://www.javascript.com",
    likes: 50,
    user: { name: "Chris" }
  };

  const user = {
    username: "Chris",
    name: "Chris"
  };

  const component = render(<Blog blog={blog} user={user} />);
  const h3 = component.container.querySelector("#title");
  console.log(prettyDOM(h3));

  component.debug();

  //method 1
  expect(component.container).toHaveTextContent(
    "Component testing is done with react-testing-library by Chris Stuart"
  );

  // method 2
  const element = component.getByText(
    "Component testing is done with react-testing-library by Chris Stuart"
  );
  expect(element).toBeDefined();

  // method 3
  const div = component.container.querySelector("#title");
  expect(div).toHaveTextContent(
    "Component testing is done with react-testing-library by Chris Stuart"
  );
});

test("clicking the button calls event handler once", () => {
  const blog = {
    title: "Component testing is done with react-testing-library",
    author: "Chris Stuart",
    url: "http://www.javascript.com",
    likes: 50,
    user: { name: "Chris" }
  };

  const user = {
    username: "Chris",
    name: "Chris"
  };

  const mockHandler = jest.fn();

  const { getByText } = render(
    <Blog blog={blog} user={user} addLike={mockHandler} />
  );

  const button = getByText("like");
  fireEvent.click(button);

  expect(mockHandler.mock.calls.length).toBe(1);
});
