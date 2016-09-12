<template lang="html">
  <button
    :type="type"
    :disabled="disabled"
    @mousedown="_mousedown"
    @mouseup="_mouseup"
    :class="[
      'button',
      size,
      style,
      shape,
      display,
      color,
      {
        'activated':activated,
        'disable-hover':hover
      }
    ]">
    <span class="button-inner">
      <slot></slot>
    </span>
    <span class="ion-button-effect"></span>
  </button>
</template>

<script>
export default {
  name: 'ViButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    role: {
      type: String,
      default: 'button' //bar-button
    },
    mt: {
      type: Boolean,
      default: false //menutoggle
    },
    hover: {
      type: Boolean,
      default: true,
      coerce: function(inValue) {
        return inValue ? 'disable-hover' : '';
      }
    },
    activated: {
      type: Boolean,
      default: false,
      coerce: function(inValue) {
        return inValue ? 'activated' : '';
      }
    },
    size: {
      type: String,
      default: 'default', // large/small/default
      coerce: function(inValue) {
        return 'button-' + inValue;
      }
    },
    style: {
      type: String,
      default: 'solid', // outline/clear/solid
      coerce: function(inValue) {
        return 'button-' + inValue;
      }
    },
    shape: {
      type: String,
      default: null, // round/fab
      coerce: function(inValue) {
        return inValue ? 'button-' + inValue : '';
      }
    },
    display: {
      type: String,
      default: null, // block/full
      coerce: function(inValue) {
        return inValue ? 'button-' + inValue : '';
      }
    },
    color: {
      type: String,
      default: null, //default/light/secondar/dark
      coerce: function(inValue) {
        return inValue ? 'button-' + inValue : '';
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    _mousedown: function(event) {
      this.activated = true;
    },
    _mouseup: function(event) {
      this.activated = false;
    },
    _toButtonStyle:function (inValue) {
      return inValue ? 'button-' + inValue : '';
    }
  }
};
</script>
