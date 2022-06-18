<template>
  <component :is="variant">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseTypography",
  props: {
    variant: {
      type: String,
      default: "p",
      validator(value: string) {
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(value);
      },
    },
  },
});
</script>

<style lang="scss">
h1 {
  color: red;
}
</style>
