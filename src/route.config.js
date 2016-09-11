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
    '*': {
      component: require('./views/404/index.vue')
    }
  })
}
