<template lang="html">
  <section class="api-item">
    <header class="hd">
      <strong>props:</strong> <slot name="hd"></slot>
      <div class="sub-title"><slot name="sub-title"></slot></div>
    </header>
    <div class="bd">
      <slot name="bd"></slot>
    </div>
  </section>
</template>

<script>
export default {
  data() {
      return {};
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {}
};
</script>

<style lang="sass">
.api-item {
    margin-bottom: 10px;
    > .hd {
        margin-bottom: 10px;
        font-size: 14px;
        border-left: 5px solid #327eff;
        background: #f5f5f5;
        line-height: 30px;
        padding-left: 10px;

        .sub-title{
          font-size:12px;
          color:#999;
          font-weight:bold;
        }
    }
    > .bd {}
}
</style>
