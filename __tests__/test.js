import { mount } from "@vue/test-utils";
import AddTodo from "../src/components/AddTodo";

describe("AddTodo", () => {
  const wrapper = mount(AddTodo);

  it("has a form", () => {
    expect(wrapper.contains("form")).toBe(true);
  });
});
