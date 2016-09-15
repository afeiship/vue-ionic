<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item v-for="item in properties">
      <template slot="hd">{{item.key}}</template>
      <template slot="sub-title">{{item.value}}</template>
      <template slot="bd">
        <section class="content" v-html='item.codePreview'></section>
      </template>
      <template slot="code-preview">{{item.codePreview}}</template>
    </api-item>
  </div>
</template>

<script>
import {
  ApiItem,
  ApiHeader
} from 'components/index';
export default {
  data() {
      return {
        name:'Card',
        properties:[
          {
            key:'basic',
            value:['ion-card','ion-card-content'],
            codePreview:require('./snippets/basic.html')
          },
          {
            key:'card-header',
            value:['ion-card','ion-card-header','ion-card-content'],
            codePreview:require('./snippets/card-header.html')
          },
          {
            key:'list in card',
            value:['ion-card','ion-list','ion-item'],
            codePreview:require('./snippets/list-in-card.html')
          },
          {
            key:'background image',
            value:['ion-card','ion-list','ion-item'],
            codePreview:require('./snippets/background-image.html')
          }
        ]
      };
    },
    components: {
      ApiItem,
      ApiHeader
    }
};
</script>
