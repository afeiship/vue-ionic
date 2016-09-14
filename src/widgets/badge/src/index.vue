<template lang="html">
  <ion-badge
    :disabled="disabled"
    :class="color">
    <slot></slot>
  </ion-badge>
</template>

<script>
export default {
  name: 'ViBadge',
  props: {
    color: {
      type: String,
      default: null, //default/light/secondar/dark
      coerce: function(inValue) {
        return inValue ? 'badge-' + inValue : '';
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
