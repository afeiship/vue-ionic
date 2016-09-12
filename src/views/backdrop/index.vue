<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item>
      <template slot="hd">visible</template>
      <template slot="sub-title">{{visible}}</template>
      <template slot="bd">
        <button type="button" @click="_click">Show Backdrop</button>
        <vi-backdrop :visible='visible' :opacity='opacity' @click="_hide"></vi-backdrop>
      </template>
      <section slot="code-preview">{{codeVisible}}</section>
    </api-item>

    <api-item>
      <template slot="hd">opacity</template>
      <template slot="sub-title">{{opacity}}</template>
      <template slot="bd">
        <input type="text" v-model="opacity">
        <vi-backdrop :visible='visible' :opacity='opacity' @click="_hide"></vi-backdrop>
      </template>
      <section slot="code-preview">{{codeOpacity}}</section>
    </api-item>
  </div>
</template>

<script>
import ViBackdrop from 'widgets/backdrop';
import {
  ApiItem,
  ApiHeader
} from 'components/index';
export default {
  data() {
      return {
        name: 'ViBackdrop',
        visible: false,
        opacity: 0.2,
        codeOpacity:require('./snippets/opacity.html'),
        codeVisible:require('./snippets/visible.html')
      };
    },
    methods: {
      _click: function() {
        this.visible = true;
      },
      _hide: function() {
        this.visible = false;
      }
    },
    components: {
      ViBackdrop,
      ApiItem,
      ApiHeader
    }
};
</script>

<style lang="css">
</style>
