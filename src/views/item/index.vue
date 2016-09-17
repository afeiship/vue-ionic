<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item>
      <template slot="hd">
        name
      </template>
      <template slot="sub-title">test</template>
      <template slot="code-preview">{{codePreview}}</template>
      <template slot="bd">
        <ion-list>
          <ion-item>
            <ion-icon name="leaf" item-left></ion-icon>
              Herbology
            <ion-icon name="rose" item-right></ion-icon>
          </ion-item>
        </ion-list>
      </template>
    </api-item>
  </div>
</template>

<script>
import {
  ApiItem,
  ApiHeader
} from 'components/index';

export default {
  name:'item',
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    ApiItem,
    ApiHeader
  }
};
</script>

<style lang="css">
</style>
