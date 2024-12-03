import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Button from "./Button";
import renderer from "react-test-renderer";

describe("Testng the Button Component", () => {
  // to debug --> screen.debug();
  // it.skip
  //it.only
  // ************************************ 1 *****************************************
  it("Should be in the DOM treee", () => {
    render(<Button>Click Me</Button>);
    let button = screen.getByText("Click Me");
    //document.get type
    expect(button).toBeInTheDocument();
    //expect -> actual result
  });

  // ************************************ 2 *****************************************
  it("should have a button with teat click me in App.js", () => {
    render(<App />);
    let button = screen.getByTestId("customBtn");
    expect(button).toBeInTheDocument();
  });

  // ************************************ 3 *****************************************
  it("should check if the value is present in the button or not", () => {
    render(<Button>Tested</Button>);
    let button = screen.getByTestId("customBtn");
    expect(button).toHaveTextContent("Tested");
  });

  //emptyDomElement - <div><div>

  // ************************************ 4 *****************************************
  it("should be an empty DOM element", () => {
    render(<Button></Button>);
    let button = screen.getByTestId("customBtn");
    expect(button).toBeEmptyDOMElement();
  });

  // ************************************ 5 *****************************************
  it("Should toogle the theme", () => {
    //initail theme is light
    //check/find the button first
    //click the button
    //current theme is dark

    render(<App />);
    let h3tag = screen.getByText("Current Theme is light");
    expect(h3tag).toHaveTextContent("light");

    let button = screen.getByTestId("customBtn");
    userEvent.click(button);

    expect(h3tag).toHaveTextContent("dark");
  });

  // ************************************ 6 *****************************************
  it("Should invoke the onClick function", () => {
    const mockFn = jest.fn();
    //no need to care about login, just can be any random function

    render(<Button onClick={mockFn}>Checking onClick</Button>);

    let button = screen.getByTestId("customBtn");
    userEvent.click(button);
    userEvent.click(button);
    //can be called any number of times

    //expexct(mockFn).toBeCalled();
    expect(mockFn).toBeCalledTimes(2);
  });

  // ************************************ ⭐ *****************************************
  // *********************** Snapshot method *************************
  // a process to refer with later if there is any mismatch or change
  it("Should create/match the snapshot", () => {
    const tree = renderer
      .create(
        <Button colorScheme="green" varaint="ghost">
          {" "}
          Custom Button{" "}
        </Button>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
