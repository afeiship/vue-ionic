<template lang="html">
  <section class="api-item">
    <header class="hd">
      <strong>Properties:</strong> <slot name="hd"></slot>
      <div class="sub-title"><slot name="sub-title"></slot></div>
    </header>
    <div class="bd">
      <slot name="bd"></slot>
    </div>
    <!-- DO NOT FORMAT THIS CODE  START-->
    <pre><code class="lang-html"><slot name="code-preview"></slot></code></pre>
    <!-- DO NOT FORMAT THIS CODE  END-->
  </section>
</template>

<script>
export default {
  data() {
      return {
        // clipboardImg:require('assets/images/clippy.svg').default
      };
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
        border-left: 5px solid #42b983;
        background: #f5f5f5;
        line-height: 18px;
        padding:8px 10px;

        .sub-title {
            font-size: 12px;
            color: #999;
            font-weight: bold;
        }
    }
    > .bd {
      padding:10px 0;
    }
}
</style>
