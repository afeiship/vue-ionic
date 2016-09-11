<template lang="html">
  <section class="api-header">
    <h2 class="hd"><span class="name"><slot></slot></span></h2>
  </section>
</template>
<script>
export default {
};
</script>
<style lang="sass">
.api-header {
  >.hd{
    padding:10px;
    margin:0 0 5px 0;
    .name{
    }
  }
}
</style>
