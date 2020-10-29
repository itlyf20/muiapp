import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/lib/css/mui.min.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../src/assets/lib/css/icons-extra.css'
 
Vue.use(MintUI)
 
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
