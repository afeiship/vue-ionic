<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item>
      <template slot="hd">
        name
      </template>
      <template slot="sub-title">{{currentIcon}}</template>
      <template slot="code-preview">{{codePreview}}</template>
      <template slot="bd">
        <section class="content">
          <ul class="logo-icons">
            <li v-for="(key,value) in logoIcons" @click="_click(key,'logo')" track-by="$index"><vi-icon :name="key | toIcon 'logo'" small></vi-icon></li>
          </ul>
        </section>
      </template>
    </api-item>

    <api-item>
      <template slot="hd">
        small
      </template>
      <template slot="sub-title">small:{{small}}</template>
      <template slot="code-preview">{{smallPreview}}</template>
      <template slot="bd">
        <section class="content">
          <div class="small-icon" @click="_small_click"><vi-icon name="ios-filing" :small="small"></vi-icon></div>
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
        codePreview:require('./snippets/icons.html'),
        smallPreview:require('./snippets/small.html'),
        small:false
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
      },
      _small_click:function () {
        this.small=!this.small;
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

.small-icon{
  font-size:32px;
  width:40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.small-icon ion-icon:active{
  color: #4F8EF7;
}

</style>
