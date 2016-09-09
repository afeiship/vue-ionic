'use strict';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import app from './views/app.vue';
import routerMap from './routers';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.debug = true;


let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: false,
  transitionOnLoad: true
});

router.beforeEach(function () {
  console.log('before start!');
});

routerMap(router);
router.start(app,'body');
