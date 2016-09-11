<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item>
      <template slot="hd">
        <vi-icon name="ionic"></vi-icon>
        <a href="http://ionicons.com/">http://ionicons.com/</a>
      </template>
      <template slot="bd">
        <section class="content" v-html="codePreview"></section>
      </template>
      <template slot="code-preview">{{codePreview}}</template>
    </api-item>
  </div>
</template>

<script>
import ViIcon from 'widgets/icon';
import {
  ApiItem,
  ApiHeader
} from 'components/index';
export default {
  data() {
      return {
        name:'ViIcon',
        codePreview:require('./snippets/icons.html')
      };
    },
    components: {
      ViIcon,
      ApiItem,
      ApiHeader
    }
};
</script>

<style lang="css">
/*******************************************************************************
MeyerWeb Reset
*******************************************************************************/
ul {
  padding-left: 5px;
  width: 100%;
  list-style: none;
  text-align: left;
  font-size: 1px;
}
li {
  position: relative;
  z-index: 0;
  display: inline-block;
  width: 42px;
  border-radius: 4px;
  list-style: none;
  text-align: center;
  font-weight: normal;
  font-size: 32px;
  cursor: pointer;
}
li:hover {
  color: #4F8EF7;
}
li.active {
  color: #4F8EF7;
}
</style>
