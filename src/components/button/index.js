const ViButton = require('./src/index.vue');

ViButton.install = function(Vue) {
  Vue.component(ViButton.name, ViButton);
};

module.exports = ViButton;
