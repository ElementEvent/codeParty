import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/session/login'
import register from '@/components/session/register'
import Main from '@/components/main/Main'
import Author from '@/components/main/Author'
import Home from '@/components/main/Home'
import Comment from '@/components/main/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/index',
      children:[
        {
          path: '/index',
          name: 'Home',
          component: Home
        },
        {
          path: '/author',
          name: 'Author',
          component: Author
        },
        {
          path: '/comment',
          name: 'Comment',
          component: Comment
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
