import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/news/:index',
    name:"news",
    component: News,
     props :true 
    },
    {
      path: '/',
      name: 'blog',
      component: Blog
    },
  ]
})
