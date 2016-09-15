<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item>
      <template slot="hd">
        Icon name(Click the icon)
      </template>
      <template slot="sub-title">ion-row/ion-col</template>
      <template slot="bd">
        <ion-row>
          <ion-col>col1</ion-col>
          <ion-col>col1</ion-col>
          <ion-col>col1</ion-col>
        </ion-row>

        <ion-row center>
          <ion-col><div>col</div></ion-col>
          <ion-col><div>col</div></ion-col>
          <ion-col><div>col</div></ion-col>
          <ion-col>
            <div>
              col<br>
              3 lines<br>
              center<br>
            </div>
          </ion-col>
        </ion-row>
      </template>
      <template slot="code-preview">{{codePreview}}</template>
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
        name:'grid'
      };
    },
    components: {
      ApiItem,
      ApiHeader
    }
};
</script>
