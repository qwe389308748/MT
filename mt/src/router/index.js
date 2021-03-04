import Vue from 'vue'
import Router from 'vue-router'
import defaultpage from '@/layout/default.vue'
import Index from '@/page/index.vue'
import changCity from '@/page/changeCity.vue'
import goodList from '@/page/goodList.vue'
import blank from '@/layout/blank.vue'
import login from '@/page/login.vue'
import register from '@/page/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultpage',
      component: defaultpage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: changCity
        }, {
          path: 's/:name',
          name: 'goodList',
          component: goodList
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blank,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    }
  ]
})
