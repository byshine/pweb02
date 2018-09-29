import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import App from '../components/App.vue';
import A from '../components/A.vue';
import B from '../components/B.vue';
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/a', component: A },
  { path: '/b', component: B }
];  

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(to);
    console.log(from)
    return { x: 0, y: 1000 }
  }
});

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');
