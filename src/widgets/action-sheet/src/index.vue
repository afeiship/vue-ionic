<template lang="html">
  <ion-action-sheet class="action-sheets-basic-page action-sheet-cmp">
    <vi-backdrop :opacity="0.4" :visible.sync="visible" @click="_backdrop_click"></vi-backdrop>
    <div class="action-sheet-wrapper" :style={'transform':_style}>
      <div class="action-sheet-container">
        <div class="action-sheet-group">
          <div class="action-sheet-title" v-if="title">{{title}}</div>
          <div class="action-sheet-sub-title" v-if="subTitle">{{subTitle}}</div>
          <vi-button v-for="button in buttons" v-if="buttons.length" :class="['action-sheet-button disable-hover',button.cssClass]">
            <vi-icon :name="button.icon" v-if="button.icon" class="action-sheet-icon"></vi-icon>
            {{button.text}}
          </vi-button>
        </div>
        <div class="action-sheet-group" v-if="cancelButton">
          <vi-button class="action-sheet-cancel disable-hover {{cssClass}}">
            <vi-icon :name="cancelButton.icon" v-if="cancelButton.icon" class="action-sheet-icon"></vi-icon>
            {{cancelButton.text}}
          </vi-button>
        </div>
      </div>
    </div>
  </ion-action-sheet>
</template>

<script>
import ViIcon from '../../icon/index';
import ViButton from '../../button/index';
import ViBackdrop from '../../backdrop/index';
export default {
  props: {
    cssClass: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false,
      coerce:function (inValue) {
        console.log(this);
        return 'button-' + inValue;
      }
    },
    title: {
      type: String,
      default: null
    },
    subTitle: {
      type: String,
      default: null
    },
    buttons: {
      type: Array,
      default: []
    },
    cancelButton: {
      type: Object,
      default: null
    }
  },
  methods:{
    _backdrop_click:function () {
      this.visible=false;
    }
  },
  computed:{
    _style:function () {
      console.log(this.visible);
      return this.visible ? 'translateY(0%)' : ''
    }
  },
  components: {
    ViButton,
    ViIcon,
    ViBackdrop
  }
};
</script>
