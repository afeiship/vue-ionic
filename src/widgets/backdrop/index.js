const ViBackdrop = require('./src/index.vue');

ViBackdrop.install = function(Vue) {
  Vue.component(ViBackdrop.name, ViBackdrop);
};

module.exports = ViBackdrop;
