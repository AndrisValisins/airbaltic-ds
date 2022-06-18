import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BtButton from "./BtButton.vue";

describe("BaseButton", () => {
  it("Matches to snapshot", () => {
    const wrapper = mount(BtButton, {
      slots: {
        default: "Primary button",
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders properly", () => {
    const wrapper = mount(BtButton, {
      slots: {
        default: "Primary button",
      },
    });
    expect(wrapper.text()).toContain("Primary button");
  });
});
