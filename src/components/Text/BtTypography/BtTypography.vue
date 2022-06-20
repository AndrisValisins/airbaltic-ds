<template>
  <component :is="variant">
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineProps({
  variant: {
    type: String,
    default: "p",
    validator(value: string) {
      return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(value);
    },
  },
});
</script>

<style lang="scss">
h1 {
  color: red;
}
</style>
