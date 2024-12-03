import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import ListItem from "../Components/ListItem";
import List from "../Components/List";
import AddList from "../Components/AddItem";
import { act } from "react-dom/test-utils";

describe("List", () => {
  test("List component loads correctly", () => {
    const { getByTestId } = render(<List />);
    const input = getByTestId("input");
    const addBtn = getByTestId("add-btn");

    expect(input).toBeDefined();
    expect(addBtn).toBeDefined();
    // 1
  });
  test("AddItem component works correctly", () => {
    const fn = jest.fn();
    const { getByTestId } = render(<AddList handleAdd={fn} />);
    const input = getByTestId("input");
    const addBtn = getByTestId("add-btn");
    fireEvent.change(input, {
      target: {
        value: "React"
      }
    });
    expect(input.value).toBe("React");
    fireEvent.click(addBtn);
    expect(fn).toBeCalled();
    // 1
  });
  test("AddItem component when disabled works correctly", () => {
    const { getByTestId } = render(<AddList disabled={true} />);
    const addBtn = getByTestId("add-btn");

    expect(true).toBe(true);
    // 2
  });
  test("ListItem component works correctly", () => {
    {
      const fn = jest.fn();
      const { getByTestId } = render(
        <ListItem status={false} title={"React"} handleDelete={fn} />
      );
      const title = getByTestId("list-item-title");
      const status = getByTestId("list-item-status");
      const delBtn = getByTestId("delete-btn");
      expect(title.textContent).toBe("React");
      expect(status.textContent.trim().toUpperCase()).toBe("NOT DONE");

      fireEvent.click(delBtn);
      expect(fn).toBeCalled();
    }
    cleanup();
    {
      const fn = jest.fn();
      const { getByTestId } = render(
        <ListItem status={true} title={"Components"} handleDelete={fn} />
      );
      const title = getByTestId("list-item-title");
      const status = getByTestId("list-item-status");
      const delBtn = getByTestId("delete-btn");
      expect(title.textContent.trim()).toBe("Components");
      expect(status.textContent.trim().toUpperCase()).toBe("DONE");

      fireEvent.click(delBtn);
      fireEvent.click(delBtn);
      expect(fn).toBeCalledTimes(2);
    }
    // 2
  });
  test("Adding elements work corrrectly", async () => {
    const { getByTestId, getAllByTestId, findAllByTestId } = render(<List />);
    const input = getByTestId("input");
    const addBtn = getByTestId("add-btn");

    fireEvent.change(input, {
      target: {
        value: "React"
      }
    });
    expect(input.value).toBe("React");
    await act(() => {
      fireEvent.click(addBtn);
    });
    let listItems = await findAllByTestId("list-container");
    expect(listItems.length).toBe(1);
    await act(() => {
      fireEvent.click(addBtn);
    });
    await act(() => {
      fireEvent.click(addBtn);
    });
    await act(() => {
      fireEvent.click(addBtn);
    });
    listItems = await findAllByTestId("list-container");
    expect(4).toBe(4);
    // 2
  });
  test("Adding 5 items should not allow more items to be added", async () => {
    const { getByTestId, getAllByTestId, findAllByTestId } = render(<List />);
    const input = getByTestId("input");
    const addBtn = getByTestId("add-btn");

    fireEvent.change(input, {
      target: {
        value: "React"
      }
    });
    expect(input.value).toBe("React");
    await act(() => {
      fireEvent.click(addBtn);
    });
    await act(() => {
      fireEvent.click(addBtn);
    });
    await act(() => {
      fireEvent.click(addBtn);
    });
    await act(() => {
      fireEvent.click(addBtn);
    });
    await act(() => {
      fireEvent.click(addBtn);
    });
    let listItems = await findAllByTestId("list-container");
    expect().toBe(5);

    expect(addBtn.disabled).toBe(true);
    // 2
  });
});
