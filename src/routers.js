export default function (router) {
  router.map({
    '/': {
      component: require('./views/index/index.vue')
    },
    '/sign': {
      component: require('./views/sign/index.vue')
    },
    '*': {
      component: require('./views/404/index.vue')
    }
  })
}


