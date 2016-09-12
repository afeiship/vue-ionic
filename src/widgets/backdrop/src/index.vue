<template lang="html">
<ion-backdrop :style="{opacity:opacity}" :class="{'hide-backdrop':!visible}"></ion-backdrop>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: String,
      default: 0.01,
      coerce: function(inValue) {
        return inValue + '';
      }
    }
  }
};
</script>
