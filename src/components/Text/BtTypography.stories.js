import BtTypography from "./BtTypography.vue";

export default {
  title: "Atoms/Text",
  component: BtTypography,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h6", "body"],
    },
  },
};

const Template = (args) => ({
  components: { BtTypography },
  setup() {
    return { args };
  },
  template: `<bt-typography v-bind="args">
    <template #default>{{ args.default }}</template>
  </bt-typography>`,
});

export const Body = Template.bind({});
Body.args = {
  default: "Body text",
  variant: "body",
};

export const H1 = Template.bind({});
H1.args = {
  default: "Heading 1",
  variant: "h1",
};

export const H2 = Template.bind({});
H2.args = {
  default: "Heading 2",
  variant: "h2",
};

export const H3 = Template.bind({});
H3.args = {
  default: "Heading 3",
  variant: "h3",
};

export const H4 = Template.bind({});
H4.args = {
  default: "Heading 4",
  variant: "h4",
};

export const H5 = Template.bind({});
H5.args = {
  default: "Heading 5",
  variant: "h5",
};

export const H6 = Template.bind({});
H6.args = {
  default: "Heading 6",
  variant: "h6",
};
