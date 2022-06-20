<template>
  <button class="btn" :class="[variant, { 'full-width': full }]">
    <slot name="iconBefore" />
    <slot />
    <slot name="iconAfter" />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validator(value: string) {
      return ["primary", "secondary"].includes(value);
    },
  },
  full: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.btn {
  border: none;
  background: none;
  padding: 5px 10px;
  border-radius: 50px;
  color: white;
  cursor: pointer;

  &.primary {
    background: blue;
  }

  &.secondary {
    background: red;
  }

  &.full-width {
    min-width: 100%;
  }
}
</style>
