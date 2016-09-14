<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item>
      <template slot="hd">
        Icon name(Click the icon)
      </template>
      <template slot="sub-title">{{currentIcon}}</template>
      <template slot="code-preview">{{codePreview}}</template>
      <template slot="bd">
        <section class="content">
          <ul>
            <li v-for="item in icons" @click="_click(item)" track-by="$index"><vi-icon :name="item"></vi-icon></li>
          </ul>
        </section>
      </template>


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
        currentIcon:'ios-add',
        icons:require('styles/src/fonts/icons.json'),
        codePreview:require('./snippets/icons.html')
      };
    },
    methods:{
      _click:function (item) {
        this.currentIcon=item;
      }
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
  width: 26px;
  border-radius: 4px;
  list-style: none;
  text-align: center;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
}
li:hover {
  color: #4F8EF7;
}
li.active {
  color: #4F8EF7;
}
</style>
