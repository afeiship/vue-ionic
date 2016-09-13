export default function(router) {
  router.map({
    '/': {
      component: require('./views/index/index.vue')
    },
    '/button': {
      component: require('./views/button/index.vue')
    },
    '/icon': {
      component: require('./views/icon/index.vue')
    },
    '/backdrop': {
      component: require('./views/backdrop/index.vue')
    },
    '/action-sheet': {
      component: require('./views/action-sheet/index.vue')
    },
    '/card': {
      component: require('./views/card/index.vue')
    },
    '*': {
      component: require('./views/404/index.vue')
    }
  })
}
