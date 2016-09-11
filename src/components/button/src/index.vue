<template lang="html">
  <button
    :type="type"
    class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ViButton',
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
};
</script>
