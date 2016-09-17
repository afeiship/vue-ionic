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
            <ion-col>
              ion-col
            </ion-col>
            <ion-col text-right>
              ion-col[text-right]
            </ion-col>
        </ion-row>

        <ion-row text-center>
          <ion-col>
            ion-row[text-center]
          </ion-col>
          <ion-col>
            ion-row[text-center]
          </ion-col>
          <ion-col>
            ion-row[text-center]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col text-left>
            ion-col[text-left]
          </ion-col>
          <ion-col text-left>
            ion-col[text-left]
          </ion-col>
          <ion-col text-right>
            ion-col[text-right]
          </ion-col>
          <ion-col text-right>
            ion-col[text-right]
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
        name:'grid',
        codePreview:require('./snippets/main.html')
      };
    },
    components: {
      ApiItem,
      ApiHeader
    }
};
</script>
