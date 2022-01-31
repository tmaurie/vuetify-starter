import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from "axios";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/' },
  ]
});
new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App),
}).$mount('#app')
