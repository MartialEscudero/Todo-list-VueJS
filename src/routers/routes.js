const routes = [{

    path: '/',
    component: require('../components/welcome.vue').default,

  }, {

    path: '/liste/todosShop',
    component: require('../components/todosShop.vue').default,
    name: 'todosShop',

  }, {

    path: '/liste/todosSimple',
    component: require('../components/todosSimple.vue').default,
    name: 'todosSimple',

  }, {

    path: '*',
    redirect: '/'

}]

export default routes