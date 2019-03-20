import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('./views/Home')))
const About = r => require.ensure([], () => r(require('./views/About')))
const Sass = r => require.ensure([], () => r(require('./views/sass')))

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/sass',
      name: 'sass',
      component: Sass
    }
  ]
})
