import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css'
import Request from "@/utils/request";


Vue.config.productionTip = false
Vue.use(ElementUI,{size:"small"});

Vue.prototype.request=Request
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
