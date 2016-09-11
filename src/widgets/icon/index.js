const ViIcon = require('./src/index.vue');

ViIcon.install = function(Vue) {
  Vue.component(ViIcon.name, ViIcon);
};

module.exports = ViIcon;
