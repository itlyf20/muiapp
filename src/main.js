import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/lib/css/mui.min.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../src/assets/lib/css/icons-extra.css'
import Video from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Video)
 
Vue.use(MintUI)
Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
