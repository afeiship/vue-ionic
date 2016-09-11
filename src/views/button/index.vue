<template lang="html">
  <div class="exmaple">
    <api-item v-for="item in properties">
      <template slot="hd">{{item.key}}</template>
      <template slot="sub-title">{{item.value}}</template>
      <section slot="bd">
        <span class="clearfix" v-for="val in item.value">
            <vi-button v-if="item.key == 'type'" :type="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'size'" :size="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'activated'" :activated="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'style'" :style="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'shape'" :shape="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'display'" :display="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'color'" :color="val">{{val}}</vi-button>
        </span>
      </section>
    </api-item>
  </div>
</template>

<script>
import ViButton from 'widgets/button';
import ApiItem from 'components/api-item/index';
export default {
  data() {
      return {
        properties: [{
          key: 'type',
          value: ['button', 'submit']
        }, {
          key: 'size',
          value: ['large', 'small', 'default']
        }, {
          key: 'style',
          value: ['outline', 'clear', 'solid']
        }, {
          key: 'shape',
          value: ['normal', 'round', 'fab']
        }, {
          key: 'display',
          value: ['normal', 'full', 'block']
        }, {
          key: 'color',
          value: ['default', 'light', 'danger', 'secondary', 'dark']
        }]
      };
    },
    components: {
      ViButton,
      ApiItem
    }
};
</script>

<style lang="sass">
.exmaple {
    padding: 10px;
}
</style>
