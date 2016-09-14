<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item>
      <template slot="hd">Badge</template>
      <template slot="sub-title">ion-badge</template>
      <section slot="bd">
        <vi-badge v-for="item in colors" :color="item">{{item}}</vi-badge>
      </section>
      <section slot="code-preview">{{codePreview}}</section>
    </api-item>
  </div>
</template>

<script>
import ViBadge from 'widgets/badge';
import {
  ApiItem,
  ApiHeader
} from 'components/index';

export default {
  data() {
    return {
      name: 'ViBadge',
      codePreview:require('./snippets/badge.html'),
      colors:['primary','secondary','danger','light','dark','wechat']
    };
  },
  components: {
    ViBadge,
    ApiItem,
    ApiHeader
  }
};
</script>
