const ViBadge = require('./src/index.vue');

ViBadge.install = function(Vue) {
  Vue.component(ViBadge.name, ViBadge);
};

module.exports = ViBadge;
