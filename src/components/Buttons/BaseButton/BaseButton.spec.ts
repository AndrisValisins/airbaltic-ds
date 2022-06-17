import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BaseButton from "./BaseButton.vue";

describe("BaseButton", () => {
  it("renders properly", () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: "Primary button",
      },
    });
    expect(wrapper.text()).toContain("Primary button");
  });
});
