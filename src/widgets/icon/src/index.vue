<template lang="html">
  <ion-icon class="ion ion-{{name}}" :small="small"></ion-icon>
</template>

<script>
export default {
  name: 'ViIcon',
  props: {
    name: {
      type: String,
      default: null
    },
    small: {
      type: Boolean,
      default: false
    }
  }
};
</script>
