<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item>
      <template slot="hd">show/hide</template>
      <template slot="sub-title">true/false</template>
      <template slot="bd">
      <button type="button" @click="_click">Show ActionSheet!</button>
      </template>
      <section slot="code-preview">Hello World!</section>
    </api-item>
  </div>
</template>

<script>
import ActionSheet from 'widgets/action-sheet/index';
import {
  ApiItem,
  ApiHeader
} from 'components/index';
export default {
  data() {
      return {
        name: 'ActionSheet'
      };
    },
    methods: {
      _click: function() {
        ActionSheet.show({
          title: 'xxx',
          subTitle: 'xxx-123',
          visible:true,
          buttons: [{
            text: 'Destructive',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
            }
          }, {
            text: 'Archive',
            handler: () => {
              console.log('Archive clicked');
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]
        });
      }
    },
    components: {
      ActionSheet,
      ApiItem,
      ApiHeader
    }
};
</script>

<style lang="css">
</style>
