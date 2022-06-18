import BtButton from "./BtButton.vue";

export default {
  title: "Atoms/Buttons",
  component: BtButton,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => ({
  components: { BtButton },
  setup() {
    return { args };
  },
  template: `<bt-button v-bind="args">
    <template #iconBefore>{{ args.iconBefore }}</template>
    <template #default>{{ args.default }}</template>
    <template #iconAfter>{{ args.iconAfter }}</template>
  </bt-button>`,
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

export const FullWidth = Template.bind({});
FullWidth.args = {
  default: "Full width",
  variant: "primary",
  full: true,
};
