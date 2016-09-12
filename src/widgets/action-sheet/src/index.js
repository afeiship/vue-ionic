let ViActionSheet = Vue.extend(require('./index.vue'));
let instance;
let instances = [];
let seed = 1;

console.log(ViActionSheet);

var ActionSheet = function(inOptions) {
  var options = inOptions || {};
  let id = 'as_' + seed++;
  instance = new ViActionSheet({
    data: options
  });
  console.log(instance);
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.dom = instance.vm.$el;
  instances.push(instance);
};

ActionSheet.show = function(inOptions) {
  ActionSheet(inOptions);
};


ActionSheet.hide = function(id) {
  console.log('hide!');
};

export default ActionSheet;
