import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BtTypography from "./BtTypography.vue";

describe("BtTypography", () => {
  it("Matches to snapshot", () => {
    const wrapper = mount(BtTypography, {
      slots: {
        default: "Body text",
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders  h1 properly", () => {
    const wrapper = mount(BtTypography, {
      slots: {
        default: "Heading 1",
      },
      props: {
        variant: "h1",
      },
    });
    expect(wrapper.text()).toContain("Heading 1");
  });

  it("renders body properly", () => {
    const wrapper = mount(BtTypography, {
      slots: {
        default: "Body",
      },
    });
    expect(wrapper.text()).toContain("Body");
  });
});
