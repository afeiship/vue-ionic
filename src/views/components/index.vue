<template lang="html">
components index page;
<vi-button>vi-button</vi-button>
<vi-button size="large" light='light'>vi-button</vi-button>
</template>

<script>
import ViButton from 'components/button';
export default {
  data() {
    return {
      theme:'secondary',
      light:true
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    ViButton
  }
};
</script>

<style lang="css">
</style>
