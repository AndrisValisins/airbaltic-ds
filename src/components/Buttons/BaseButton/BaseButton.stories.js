import BaseButton from "./BaseButton.vue";

export default {
  title: "Components/Buttons",
  component: BaseButton,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: `<base-button v-bind="args">
    <template #iconBefore>{{ args.iconBefore }}</template>
    <template #default>{{ args.default }}</template>
    <template #iconAfter>{{ args.iconAfter }}</template>
  </base-button>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  default: "My primary button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  default: "Secondary",
  variant: "secondary",
};

export const WithIconBefore = Template.bind({});
WithIconBefore.args = {
  default: "Icon Before",
  variant: "primary",
  iconBefore: "A",
};

export const WithIconAfter = Template.bind({});
WithIconAfter.args = {
  default: "Icon After",
  variant: "primary",
  iconAfter: "A",
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  default: "Icon Before",
  variant: "primary",
  iconAfter: "A",
  iconBefore: "A",
};
