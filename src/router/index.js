import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: resolve => require.ensure([], () => resolve(require('../views/Index.vue')), 'Index'),
  },
  //index的子页面
  {
  	  path:'/index/news',
  	  component:resolve => require.ensure([], () => resolve(require('../components/news/News.vue')), 'News'),
	  meta: { navShow: false} //解决切换到子页面后底部导航栏的显示和隐藏问题
  },
  {
  	  path:'/index/share',
  	  component:resolve => require.ensure([], () => resolve(require('../components/share/Share.vue')), 'Share'),
	  meta: { navShow: false}//解决切换到子页面后底部导航栏的显示和隐藏问题
  },
  {
  	  path:'/index/shop',
  	  component:resolve => require.ensure([], () => resolve(require('../components/shop/Shop.vue')), 'Shop'),
  	  meta: { navShow: false}//解决切换到子页面后底部导航栏的显示和隐藏问题
  },
  {
  	  path:'/index/feedback',
  	  component:resolve => require.ensure([], () => resolve(require('../components/feedback/FeedBack.vue')), 'FeedBack'),
  	  meta: { navShow: false}//解决切换到子页面后底部导航栏的显示和隐藏问题
  },
  {
  	  path:'/index/video',
  	  component:resolve => require.ensure([], () => resolve(require('../components/video/Video.vue')), 'Video'),
  	  meta: { navShow: false}//解决切换到子页面后底部导航栏的显示和隐藏问题
  },
  {
  	  path:'/index/callus',
  	  component:resolve => require.ensure([], () => resolve(require('../components/callus/CallUs.vue')), 'CallUs'),
  	  meta: { navShow: false}//解决切换到子页面后底部导航栏的显示和隐藏问题
  },
  //会员
  {
    path: '/member',
    name: 'Member',
    component: resolve => require.ensure([], () => resolve(require('../views/Member.vue')), 'Member')
  },
  {
    path: '/shopcar',
    name: 'ShopCar',
    component: resolve => require.ensure([], () => resolve(require('../views/ShopCar.vue')), 'ShopCar')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: resolve => require.ensure([], () => resolve(require('../views/Mine.vue')), 'Mine')
  },
  {
	  path:"/",
	  redirect:"/index"
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'mui-active' //覆盖默认的路由router-link-active
})

export default router
