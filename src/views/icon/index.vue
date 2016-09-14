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
          <ul class="logo-icons">
            <li v-for="(key,value) in logoIcons" @click="_click(key,'logo')" track-by="$index"><vi-icon :name="key | toIcon 'logo'"></vi-icon></li>
          </ul>
          <ul class="mode-ios-icons">
            <li v-for="(key,value) in modeIcons" @click="_click(key,'ios')" track-by="$index"><vi-icon :name="key | toIcon 'ios'"></vi-icon></li>
          </ul>
          <ul class="mode-md-icons">
            <li v-for="(key,value) in modeIcons" @click="_click(key,'md')" track-by="$index"><vi-icon :name="key | toIcon 'md'"></vi-icon></li>
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
        logoIcons:require('styles/src/fonts/logo-icons.json'),
        modeIcons:require('styles/src/fonts/mode-icons.json'),
        codePreview:require('./snippets/icons.html')
      };
    },
    filters:{
      toIcon:function (inValue,inType) {
        return [inType,inValue].join('-');
      }
    },
    methods:{
      _click:function (item,inType) {
        this.currentIcon=this.$options.filters.toIcon(item,inType);
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
  margin-bottom: 30px;
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
